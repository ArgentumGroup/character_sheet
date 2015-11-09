class Api::CharacterWeaponItemsController < ApplicationController

  before_action do
    @current_character = Character.find_by id: session[:character_id]
  end

  def create
    @inventory = @current_character.inventory
    @character_weapon_item = @inventory.character_weapon_items.new(character_weapon_item_params)
    @inventory.save
    render json: @character_weapon_item
  end

  def update
    @inventory = @current_character.inventory
    @character_weapon_item = @inventory.character_weapon_items.find(params[:id])
    @character_weapon_item.update_attributes(character_weapon_item_params)
  end

  def destroy
    @inventory = @current_character.inventory
    @character_weapon_item = @inventory.character_weapon_items.find(params[:id])
    @character_weapon_item.destroy
  end

  def character_weapon_item_params
    params.require(:character_weapon_item).permit(:weapon_id)
  end
end
