class Sheet < ActiveRecord::Base
  belongs_to :character

  def armor_class
    return "85"
  end
end
