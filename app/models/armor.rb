class Armor < ActiveRecord::Base
  has_many :character_armor_items
  has_many :inventories, through: :character_armor_items
end
