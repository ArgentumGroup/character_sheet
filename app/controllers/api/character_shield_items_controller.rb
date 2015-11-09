class Api::CharacterShieldItemsController < ApplicationController

  before_action do
    @current_character = Character.find_by id: session[:character_id]
  end

  def create
    @inventory = @current_character.inventory
    @character_shield_item = @inventory.character_shield_items.new(character_shield_item_params)
    @inventory.save
    render json: @character_shield_item
  end

  def update
    @inventory = @current_character.inventory
    @character_shield_item = @inventory.character_shield_items.find(params[:id])
    @character_shield_item.update_attributes(character_shield_item_params)
  end

  def destroy
    @inventory = @current_character.inventory
    @character_shield_item = @inventory.character_shield_items.find(params[:id])
    @character_shield_item.destroy
  end

  def character_shield_item_params
    params.require(:character_shield_item).permit(:shield_id)
  end
end
