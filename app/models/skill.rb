class Skill < ActiveRecord::Base
  has_many :character_skill_items
  has_many :capability_blocks, through: :character_skill_items
end
