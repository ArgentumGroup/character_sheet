class Character < ActiveRecord::Base
  belongs_to :campaign
  has_one :inventory
  has_one :ability_score
end
