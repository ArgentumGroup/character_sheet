class Shield < ActiveRecord::Base
  has_many :character_shield_items
  has_many :inventories, through: :character_shield_items
end
