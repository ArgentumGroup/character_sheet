class CreateSpellLists < ActiveRecord::Migration
  def change
    create_table :spell_lists do |t|
      t.integer :spell_id
      t.integer :capability_block_id

      t.timestamps null: false
    end
  end
end