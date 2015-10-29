class UsersController < ApplicationController

  def sign_up
  	@users = User.all
  end
end
