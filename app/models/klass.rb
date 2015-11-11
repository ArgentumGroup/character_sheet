class Klass < ActiveRecord::Base
  has_many :characters
  # has_many :character_klass_items
  # has_many :capability_blocks, through: :character_klass_items
end
