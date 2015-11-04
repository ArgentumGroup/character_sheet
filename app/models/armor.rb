class Armor < ActiveRecord::Base
  has_many :character_armor_items
end
