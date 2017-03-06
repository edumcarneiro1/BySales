class CreateArtists < ActiveRecord::Migration
  def self.up
    create_table :artists do |t|
      t.string :phone
      t.string :email
      t.string :address
      t.string :title
      t.string :subtitle
      t.string :facebook
      t.string :instagram
      t.string :pinterest
    end
  end

  def self.down
    drop_table :artists
  end
end
