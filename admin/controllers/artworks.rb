Bysales::Admin.controllers :artworks do
  get :index do
    @artworks = Artwork.all
    render "artworks/index"
  end

  get :new do
    @presigned = S3Upload.s3_presigned_post('work',true,nil)
    render "artworks/new"
  end

  get :edit, with: :id do |id|
    @artwork =  Artwork.find_by(id: id)

    render 'errors/404' unless @artwork

    @presigned_edit = S3Upload.s3_presigned_post('work',true,@artwork.id)

    render "artworks/edit"
  end

  post :edit, :csrf_protection => false, with: :id do |id|
    artwork = Artwork.create(name: params['name'], description: params['description'])
    S3Upload.image_upload_from_temp(artwork,params['image']) if params['image'].present?
    redirect url(:artworks, :index)
  end

  post :new, :csrf_protection => false do
    artwork = Artwork.create(name: params['name'], description: params['description'])
    S3Upload.image_upload_from_temp(artwork,params['image']) if params['image'].present?
    redirect url(:artworks, :index)
  end
end
