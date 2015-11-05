class CreateCharacterArmorItems < ActiveRecord::Migration
  def change
    create_table :character_armor_items do |t|
      t.integer :inventory_id
      t.integer :armor_id

      t.timestamps null: false
    end
  end
end
