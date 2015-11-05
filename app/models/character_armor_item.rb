class CharacterArmorItem < ActiveRecord::Base
  belongs_to :armor
  belongs_to :inventory
end
