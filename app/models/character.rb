class Character < ActiveRecord::Base
  belongs_to :campaign
  has_one :inventory
end
