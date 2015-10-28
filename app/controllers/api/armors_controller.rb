class ArmorsController < ApplicationController
  def index
    @armors = Armor.all
  end
end
