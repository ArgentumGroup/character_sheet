class CreateCharacterShieldItems < ActiveRecord::Migration
  def change
    create_table :character_shield_items do |t|
      t.integer :inventory_id
      t.integer :shield_id

      t.timestamps null: false
    end
  end
end
