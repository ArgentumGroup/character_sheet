class CharacterSkillItem < ActiveRecord::Base
  belongs_to :capability_block
  has_many :skills
end
