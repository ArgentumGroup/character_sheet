class AddPropertiesToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :name, :string
    add_column :skills, :governing_ability, :string
  end
end
