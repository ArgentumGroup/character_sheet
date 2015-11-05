class Api::SkillsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @skills = Skill.all
  end
end
