class CreateCapabilityBlocks < ActiveRecord::Migration
  def change
    create_table :capability_blocks do |t|
      t.integer :character_id

      t.timestamps null: false
    end
  end
end
