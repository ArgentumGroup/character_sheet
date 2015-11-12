class AddMorePropertiesToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :acrobatics, :boolean, default: false
    add_column :characters, :animal_handling, :boolean, default: false
    add_column :characters, :arcana, :boolean, default: false
    add_column :characters, :athletics, :boolean, default: false
    add_column :characters, :deception, :boolean, default: false
    add_column :characters, :history, :boolean, default: false
    add_column :characters, :insight, :boolean, default: false
    add_column :characters, :intimidation, :boolean, default: false
    add_column :characters, :investigation, :boolean, default: false
    add_column :characters, :medicine, :boolean, default: false
    add_column :characters, :nature, :boolean, default: false
    add_column :characters, :perception, :boolean, default: false
    add_column :characters, :performance, :boolean, default: false
    add_column :characters, :persuasion, :boolean, default: false
    add_column :characters, :religion, :boolean, default: false
    add_column :characters, :sleight_of_hand, :boolean, default: false
    add_column :characters, :stealth, :boolean, default: false
    add_column :characters, :survival, :boolean, default: false
  end
end
