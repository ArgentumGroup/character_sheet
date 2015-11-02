class CreateCapabilityBlocks < ActiveRecord::Migration
  def change
    create_table :capability_blocks do |t|
      t.integer :character_id
      t.integer :spell_list_id
      t.integer :ability_score_block_id
      t.integer :skill_block_id

      t.timestamps null: false
    end
  end
end
