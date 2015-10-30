class AddPropertiesToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :user_id, :integer
    add_column :campaigns, :character_id, :integer
  end
end
