class Api::CharactersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    # @characters = Character.all
    @user = @current_user
  end

end
