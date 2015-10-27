class CreateArmors < ActiveRecord::Migration
  def change
    create_table :armors do |t|
      t.string :type
      t.string :name
      t.integer :cost
      t.integer :armor_class
      t.integer :strength_requirement
      t.boolean :stealth_disadvantage
      t.decimal :weight

      t.timestamps null: false
    end
  end
end
