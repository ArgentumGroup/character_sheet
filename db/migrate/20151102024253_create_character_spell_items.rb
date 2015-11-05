class CreateCharacterSpellItems < ActiveRecord::Migration
  def change
    create_table :character_spell_items do |t|
      t.integer :spell_id
      t.integer :capability_block_id

      t.timestamps null: false
    end
  end
end
