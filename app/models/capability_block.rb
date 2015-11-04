class CapabilityBlock < ActiveRecord::Base
  belongs_to :character
  has_one :ability_score_block
  has_many :character_skill_items
  has_many :character_spell_items

  has_many :skills, through: :character_skill_items
  has_many :spells, through: :character_spell_items

  accepts_nested_attributes_for :ability_score_block
  accepts_nested_attributes_for :character_skill_items
  accepts_nested_attributes_for :character_spell_items

end
