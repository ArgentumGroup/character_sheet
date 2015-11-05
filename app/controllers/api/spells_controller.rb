class Api::SpellsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @spells = Spell.all
  end
end
