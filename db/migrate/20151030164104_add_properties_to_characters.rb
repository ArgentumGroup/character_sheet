class AddPropertiesToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :klass, :string
    add_column :characters, :race, :string
  end
end