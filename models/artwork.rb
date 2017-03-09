class Artwork < ActiveRecord::Base
  # Validations
  validates_presence_of  :name; :description

end
