class Character < ActiveRecord::Base
  belongs_to :campaign
  has_one :inventory
  has_one :capability_block
end
