class Inventory < ActiveRecord::Base
  belongs_to :character
  has_many :character_armor_items
  has_many :character_weapon_items
  has_many :character_shield_items
end
