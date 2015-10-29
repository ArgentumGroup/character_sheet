class Api::WeaponsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @weapons = Weapon.all
  end
end
