class CreatePages < ActiveRecord::Migration
  def self.up
    create_table :pages do |t|
      t.string :image
      t.string :title
      t.text :body, limit: 4294967295
    end
  end

  def self.down
    drop_table :pages
  end
end
