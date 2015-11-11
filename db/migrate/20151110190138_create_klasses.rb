class CreateKlasses < ActiveRecord::Migration
  def change
    create_table :klasses do |t|
      t.string :name
      t.text :description
      t.integer :hit_die
      t.boolean :strength_save_proficiency
      t.boolean :dexterity_save_proficiency
      t.boolean :constitution_save_proficiency
      t.boolean :intelligence_save_proficiency
      t.boolean :wisdom_save_proficiency
      t.boolean :charisma_save_proficiency
      t.boolean :light_armor_proficiency
      t.boolean :medium_armor_proficiency
      t.boolean :heavy_armor_proficiency
      t.boolean :simple_weapon_proficiency
      t.boolean :martial_weapon_proficiency
      t.boolean :shield_proficiency
      t.boolean :spellcaster
      t.string :caster_type

      t.timestamps null: false
    end
  end
end
