class SpellList < ActiveRecord::Base
  has_many :spells
  belongs_to :capability_block
end
