class Api::SessionsController < ApplicationController
  protect_from_forgery with: :null_session

  def new
  end

  def create
    email = params[:email]
    password = params[:password]
    user = User.find_by email: email
    if user.present? && user.authenticate(password)
      # sign_in user
      session[:user_id] = user.id
    else
      # render json: ?.errors
    end
  end

  def destroy
    session.delete :user_id
  end
end
