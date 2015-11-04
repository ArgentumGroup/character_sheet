class Api::CharacterShieldItemsController < ApplicationController
  def create
    @inventory = @current_character.inventory
    @character_shield_item = @inventory.character_shield_items.new(character_shield_item_params)
    @inventory.save
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
