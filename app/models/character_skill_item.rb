class CharacterSkillItem < ActiveRecord::Base
  belongs_to :capability_block
  belongs_to :skill
end
