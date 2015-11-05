class Spell < ActiveRecord::Base
  has_many :character_spell_items
  has_many :capability_blocks, through: :character_spell_items
end
