class Weapon < ActiveRecord::Base
  has_many :character_weapon_items
end
