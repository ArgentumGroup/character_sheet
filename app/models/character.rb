class Character < ActiveRecord::Base
  belongs_to :campaign
  has_one :inventory
  has_one :capability_block

  has_many :character_armor_items, through: :inventory
  has_many :character_shield_items, through: :inventory
  has_many :character_weapon_items, through: :inventory

  accepts_nested_attributes_for :inventory

  has_one :ability_score_block, through: :capability_block
  has_one :skill_block, through: :capability_block
  has_one :spell_list, through: :capability_block

  accepts_nested_attributes_for :capability_block

end
