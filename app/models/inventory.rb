class Inventory < ActiveRecord::Base
  has_many :armors
  has_many :weapons
end
