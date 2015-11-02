class CreateCharacterWeaponItems < ActiveRecord::Migration
  def change
    create_table :character_weapon_items do |t|
      t.integer :inventory_id
      t.integer :weapon_id

      t.timestamps null: false
    end
  end
end
