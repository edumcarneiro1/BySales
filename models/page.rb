class Page < ActiveRecord::Base
  # Validations
  validates_presence_of     :body, :title
end
