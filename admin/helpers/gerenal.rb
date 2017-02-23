Bysales::Admin.helpers do
  include Rack::Utils

  def menu_active?(*options)
    path = request.path_info.split('/')
    options.each_with_index do |option, index|
      return nil unless path[index + 1] && path[index + 1].to_sym == option
    end
    'active'
  end
end
