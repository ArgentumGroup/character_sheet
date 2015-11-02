class CapabilityBlock < ActiveRecord::Base
  belongs_to :character
  has_one :ability_score_block
  has_one :skill_block
  has_one :spell_list
end
