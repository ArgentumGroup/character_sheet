json.characters do
  json.user_name @user.name
  json.user_email @user.email
  json.characters @user.characters do |character|
    json.character_name character.name
    json.character_level character.level
    json.character_race character.race
    json.character_class character.klass
    json.character_campaign_id character.campaign_id
  end
end
