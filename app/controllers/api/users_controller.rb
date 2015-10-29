class Api::UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @users = User.all
  end

  def create
    @user = User.new params.require(:user).permit(:name, :email, :password, :password_confirmation)
    if @user.save
      render json: @user, callback: 'updateCurrentUser'
      sign_in @user
    else
      json: @user.errors
    end
  end
end
