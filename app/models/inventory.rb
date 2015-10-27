class Inventory < ActiveRecord::Base
  belongs_to :character
  has_many :armors
  has_many :weapons
end
