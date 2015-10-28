class Api::ArmorsController < ApplicationController
  def index
    @armors = Armor.all
  end
end
