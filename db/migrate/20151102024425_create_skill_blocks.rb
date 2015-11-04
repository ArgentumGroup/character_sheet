class CreateSkillBlocks < ActiveRecord::Migration
  def change
    create_table :skill_blocks do |t|
      t.integer :skill_id
      t.integer :capability_block_id

      t.timestamps null: false
    end
  end
end
