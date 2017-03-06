class Artist < ActiveRecord::Base
  # Validations
  validates_presence_of     :email, :phone, :address, :title, :subtitle
end
