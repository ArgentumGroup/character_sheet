class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.integer :user_id
      t.integer :campaign_id
      t.string :name
      t.integer :level

      t.timestamps null: false
    end
  end
end
