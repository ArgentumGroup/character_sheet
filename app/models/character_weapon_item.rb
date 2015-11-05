class CharacterWeaponItem < ActiveRecord::Base
  belongs_to :inventory
  belongs_to :weapon
end
