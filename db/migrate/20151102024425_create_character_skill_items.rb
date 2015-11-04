class CreateCharacterSkillItems < ActiveRecord::Migration
  def change
    create_table :character_skill_items do |t|
      t.integer :skill_id
      t.integer :capability_block_id

      t.timestamps null: false
    end
  end
end
