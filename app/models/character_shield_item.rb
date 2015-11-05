class CharacterShieldItem < ActiveRecord::Base
  belongs_to :inventory
  belongs_to :shield
end
