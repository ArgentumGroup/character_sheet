class Api::ArmorsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    @armors = Armor.all
  end
end
