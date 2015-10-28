class Api::UsersController < ApplicationController

def create
  @user = User.new params.require(:user).permit(:name, :email)
  if @user.save
    render json: @user
  else
    render status: 422, json: @user.errors
  end
end

end
