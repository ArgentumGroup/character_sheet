class Api::CampaignsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @user = @current_user
    # current_user = User.find_by id: session[:user_id]
    # user_campaigns = []
    #  Campaign.all.each do |f|
    #    if current_user.campaigns.
    #     user_campaigns << f
    #   end
    # end
    # render json: user_campaigns
  end

  def show

  end
end
