class Api::CharacterSpellItemsController < ApplicationController

  def create
    @curr_char = Character.find_by id: params[:character_id]
    @capabilities = @curr_char.capability_block
    @character_spell_item = @capabilities.character_spell_items.new(character_spell_item_params)
    @capabilities.save
    render json: @character_spell_item
  end

  def destroy
    @curr_char = Character.find_by id: params[:character_id]
    @capabilities = @curr_char.capability_block
    @character_spell_item = @capabilities.character_spell_items.find(params[:id])
    @character_spell_item.destroy
  end

  private
    def character_spell_item_params
      params.require(:character_spell_item).permit(:spell_id)
    end

end
