class Api::CharacterArmorItemsController < ApplicationController

  def create
    @curr_char = Character.find_by id: params[:character_id]
    @inventory = @curr_char.inventory
    @character_armor_item = @inventory.character_armor_items.new(character_armor_item_params)
    @inventory.save
    render json: @character_armor_item
  end

  def update
    @inventory = @current_character.inventory
    @character_armor_item = @inventory.character_armor_items.find(params[:id])
    @character_armor_item.update_attributes(character_armor_item_params)
    # @character_armor_items = @inventory.character_armor_items
  end

  def destroy
    @inventory = @current_character.inventory
    @character_armor_item = @inventory.character_armor_items.find(params[:id])
    @character_armor_item.destroy
  end

  def character_armor_item_params
    params.require(:character_armor_item).permit(:armor_id)
  end
end
