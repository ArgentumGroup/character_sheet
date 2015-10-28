class Api::WeaponsController < ApplicationController
  def index
    @weapons = Weapon.all
  end
end
