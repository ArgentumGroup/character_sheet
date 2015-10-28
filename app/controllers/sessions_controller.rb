class SessionsController < ApplicationController

  def new
  end

  def create
    email = params[:email]
    password = params[:password]
    user = User.find_by email: email
    if user.present? && user.authenticate(password)
      sign_in user
      # redirect_to profile_path, notice: "Happy gaming!"
    else
      render :new
    end
  end

  def destroy
    session.delete :user_id
  end
end
