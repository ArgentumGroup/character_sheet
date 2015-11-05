class Skill < ActiveRecord::Base
  has_many :character_skill_items
end
