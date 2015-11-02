class AddCharacterIdToInventories < ActiveRecord::Migration
  def change
    add_column :inventories, :character_id, :integer
  end
end
