class User < ActiveRecord::Base
  has_secure_password
  has_many :campaigns
  has_many :characters, through: :campaigns
end
