json.characters do
  json.user_id @user.id
  json.user_name @user.name
  json.user_email @user.email
  json.characters @user.characters do |character|
    json.character_id character.id
    json.character_user_id character.user_id
    json.character_name character.name
    json.character_level character.level
    json.character_race character.race
    json.character_class character.klass
    json.character_campaign character.campaign
  end
end
