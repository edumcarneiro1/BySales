class Artwork < ActiveRecord::Base
  # Validations
  validates_presence_of     :image, :name; :description

end
