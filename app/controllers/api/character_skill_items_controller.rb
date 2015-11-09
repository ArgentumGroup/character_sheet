class Api::CharacterSkillItemsController < ApplicationController
  before_action do
    @current_character = Character.find_by id: session[:character_id]
  end

end
