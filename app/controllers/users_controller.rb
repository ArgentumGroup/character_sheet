class UsersController < ApplicationController
  def sign_in
  end

  def sign_up
  	@users = User.all
  end
end
