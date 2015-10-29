class AddNameToAbilityScores < ActiveRecord::Migration
  def change
    add_column :ability_scores, :name, :string
  end
end
