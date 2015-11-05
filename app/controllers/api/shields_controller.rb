class Api::ShieldsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @shields = Shield.all
  end
end
