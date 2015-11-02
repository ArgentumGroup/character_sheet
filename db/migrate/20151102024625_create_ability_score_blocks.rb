class CreateAbilityScoreBlocks < ActiveRecord::Migration
  def change
    create_table :ability_score_blocks do |t|
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      t.timestamps null: false
    end
  end
end
