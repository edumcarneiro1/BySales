Bysales::Admin.controllers :pages do
  get :index do
    @pages = Page.all
    if @pages.count > 0
      render "pages/index"
    else
      render "pages/empty"
    end

  end

  get :new do
    @presigned = S3Upload.s3_presigned_post('page',true,nil)
    render "pages/new"
  end

  get :edit, with: :id do |id|
    @page =  Page.find_by(id: id)

    halt 'errors/404' unless @page

    @presigned_edit = S3Upload.s3_presigned_post('page',false,@page.id)

    render "pages/edit"
  end

  post :edit, :csrf_protection => false, with: :id do |id|
    page =  Page.find_by(id: id)

    halt 'errors/404' unless page

    if params['image'].present?
      S3Upload.delete_older_images(page,params['image'],'pages')
      s3_path = "https://s3-eu-west-1.amazonaws.com/bysalescloud/pages/#{page.id}/#{params['image']}"
      page.update(title: params['title'],body: params['body'],image: s3_path)
    else
      page.update(title: params['title'],body: params['body'])
    end
    redirect url(:pages, :index)
  end

  post :new, :csrf_protection => false do
    page = Page.create(title: params['title'],body: params['body'])
    S3Upload.image_upload_from_temp(page,params['image'],'pages') if params['image'].present?
    redirect url(:pages, :index)
  end

  get :destroy, with: :id do
    page = Page.find_by(id: params[:id])

    halt 'errors/404' unless page

    S3Upload.delete_image(page,'pages')

    page.destroy

    redirect url(:pages, :index)

  end
end
