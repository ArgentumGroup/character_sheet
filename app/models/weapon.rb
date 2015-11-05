class Weapon < ActiveRecord::Base
  has_many :character_weapon_items
  has_many :inventories, through: :character_weapon_items
end
