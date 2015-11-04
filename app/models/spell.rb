class Spell < ActiveRecord::Base
  has_many :character_spell_items
end
