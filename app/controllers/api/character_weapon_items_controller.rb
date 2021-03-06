class Api::CharacterWeaponItemsController < ApplicationController

  def create
    @curr_char = Character.find_by id: params[:character_id]
    @inventory = @curr_char.inventory
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
    @curr_char = Character.find_by id: params[:character_id]
    @inventory = @current_character.inventory
    @character_weapon_item = @inventory.character_weapon_items.find(params[:id])
    @character_weapon_item.destroy
  end

  def character_weapon_item_params
    params.require(:character_weapon_item).permit(:weapon_id)
  end
end
