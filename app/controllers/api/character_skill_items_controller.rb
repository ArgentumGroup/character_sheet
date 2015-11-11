class Api::CharacterSkillItemsController < ApplicationController

  def create
    @curr_char = Character.find_by id: params[:character_id]
    @capabilities = @curr_char.capability_block
    @character_skill_item = @inventory.character_skill_items.new(character_skill_item_params)
    @capabilities.save
    render json: @character_skill_item
  end

  def destroy
    @curr_char = Character.find_by id: params[:character_id]
    @capabilities = @curr_char.capability_block
    @character_skill_item = @capabilities.character_skill_items.find(params[:id])
    @character_skill_item.destroy
  end

  private
    def character_skill_item_params
      params.require(:character_skill_item).permit(:skill_id)
    end

end
