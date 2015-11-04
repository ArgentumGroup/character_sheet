class CapabilityBlock < ActiveRecord::Base
  belongs_to :character
  has_one :ability_score_block
  has_one :skill_block
  has_one :spell_list

  accepts_nested_attributes_for :ability_score_block
  accepts_nested_attributes_for :skill_block
  accepts_nested_attributes_for :spell_list

end
