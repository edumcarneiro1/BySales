Bysales::Admin.controllers :artworks do
  get :index do
    @artworks = Artwork.all
    if @artworks.count > 0
      render "artworks/index"
    else
      render "artworks/empty"
    end

  end

  get :new do
    @presigned = S3Upload.s3_presigned_post('work',true,nil)
    render "artworks/new"
  end

  get :edit, with: :id do |id|
    @artwork =  Artwork.find_by(id: id)

    halt 'errors/404' unless @artwork

    @presigned_edit = S3Upload.s3_presigned_post('work',false,@artwork.id)

    render "artworks/edit"
  end

  post :edit, :csrf_protection => false, with: :id do |id|
    artwork =  Artwork.find_by(id: id)

    halt 'errors/404' unless @artwork

    if params['image'].present?
      S3Upload.delete_older_images(artwork,params['image'])

      s3_path = "https://s3-eu-west-1.amazonaws.com/bysalescloud/works/#{artwork.id}/#{params['image']}"
      artwork.update(name: params['name'],description: params['description'],image: s3_path)
    else
      artwork.update(name: params['name'],description: params['description'])
    end
    redirect url(:artworks, :index)
  end

  post :new, :csrf_protection => false do
    artwork = Artwork.create(name: params['name'], description: params['description'])
    S3Upload.image_upload_from_temp(artwork,params['image']) if params['image'].present?
    redirect url(:artworks, :index)
  end

  get :destroy, with: :id do
    artwork = Artwork.find_by(id: params[:id])

    halt 'errors/404' unless artwork

    S3Upload.delete_image(artwork)

    artwork.destroy

    redirect url(:artworks, :index)

  end
end
