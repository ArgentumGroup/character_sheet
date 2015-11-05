class CreateShields < ActiveRecord::Migration
  def change
    create_table :shields do |t|
      t.string :name
      t.integer :cost
      t.integer :armor_class
      t.boolean :stealth_disadvantage
      t.decimal :weight

      t.timestamps null: false
    end
  end
end
