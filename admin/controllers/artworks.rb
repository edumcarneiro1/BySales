Bysales::Admin.controllers :artworks do
  get :index do
    render "artworks/index"
  end
end
