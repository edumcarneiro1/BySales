Bysales::Admin.controllers :settings do
  get :index do
    @artist = Artist.first.attributes
    render "settings/index"
  end

  post :save, :csrf_protection => false do
    @artist = Artist.first

    return {error: true, message: 'Contact the developer to fix this bug. Email: edumarquescarneiro@gmail.com'}.to_json unless @artist

    @artist.update(email: params[:email], phone: params[:phone], address: params[:address],title: params[:title], subtitle: params[:subtitle], facebook: params[:facebook], instagram: params[:instagram], pinterest: params[:pinterest])

    {error: false, message: 'Successfully saved' }.to_json
  end
end
