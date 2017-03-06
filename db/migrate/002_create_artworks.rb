class CreateArtworks < ActiveRecord::Migration
  def self.up
    create_table :artworks do |t|
      t.string :image
      t.string :name
      t.text :description, limit: 65535
    end
  end

  def self.down
    drop_table :artworks
  end
end
