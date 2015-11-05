class CharacterSpellItem < ActiveRecord::Base
  has_many :spells
  belongs_to :capability_block
end
