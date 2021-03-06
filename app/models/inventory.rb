class Inventory < ActiveRecord::Base
  belongs_to :character
  has_many :character_armor_items
  has_many :character_weapon_items
  has_many :character_shield_items

  has_many :armors, through: :character_armor_items
  has_many :shields, through: :character_shield_items
  has_many :weapons, through: :character_weapon_items

  accepts_nested_attributes_for :character_armor_items
  accepts_nested_attributes_for :character_weapon_items
  accepts_nested_attributes_for :character_shield_items

end
