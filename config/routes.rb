Rails.application.routes.draw do

  root 'application#main'

  namespace :api do
    resources :users
    resources :characters
    resources :campaigns
    resources :inventories
    resources :character_armor_items
    resources :character_shield_items
    resources :character_skill_items
    resources :character_weapon_items
    resources :armors
    resources :shields
    resources :skills
    resources :spells
    resources :weapons
  end

end
