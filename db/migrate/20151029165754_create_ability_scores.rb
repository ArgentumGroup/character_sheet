class CreateAbilityScores < ActiveRecord::Migration
  def change
    create_table :ability_scores do |t|

      t.timestamps null: false
    end
  end
end
