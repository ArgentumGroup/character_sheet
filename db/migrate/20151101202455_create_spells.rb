class CreateSpells < ActiveRecord::Migration
  def change
    create_table :spells do |t|
      t.string :name
      t.boolean :cleric
      t.boolean :wizard
      t.integer :level
      t.string :casting_time
      t.string :range
      t.boolean :verbal
      t.boolean :somatic
      t.boolean :material
      t.string :components
      t.string :duration
      t.text :description

      t.timestamps null: false
    end
  end
end
