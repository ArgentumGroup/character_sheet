class CreateWeapons < ActiveRecord::Migration
  def change
    create_table :weapons do |t|
      t.string :weapon_type
      t.string :category
      t.string :name
      t.integer :cost
      t.integer :damage_die_number
      t.integer :damage_die_type
      t.string :damage_type
      t.decimal :weight

      t.timestamps null: false
    end
  end
end
