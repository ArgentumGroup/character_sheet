class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action do
    @current_user = User.find_by id: session[:user_id]
    @current_character = Character.User.find_by id: session[:character_id]

    # @current_character_inventory = @current_character.inventory
    #
    # @current_character_armor_items = @current_character_inventory.character_armor_items
    # @current_character_shield_items = @current_character_inventory.character_shield_items
    # @current_character_weapon_items = @current_character_inventory.character_weapon_items
    #
    # @current_character_capability_block = @current_character.capability_block
    # @current_character_skill_items = @current_character_capability_block.character_skill_items
    # @current_character_spell_items = @current_character_capability_block.character_spell_items

  end

  def authenticate_user!
    if @current_user.blank?
      # render json: ?.errors
    end
  end

  # def sign_in(user)
  #   session[:user_id] = user.id
  # end

  def main
  end

end
