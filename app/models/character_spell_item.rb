class CharacterSpellItem < ActiveRecord::Base
  belongs_to :spell
  belongs_to :capability_block
end
