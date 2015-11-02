class Api::CharactersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    # @characters = Character.all
    @user = @current_user
  end

  def show
    @character = Character.find(params[:id])
  end

  def create
    @character = Character.new params.require(:character).permit(:user_id, :campaign_id)
  end

  def update
    @character = Character.find(params[:id])
    if @character.update_attributes(character_params)
      render :show
    end
  end

end
