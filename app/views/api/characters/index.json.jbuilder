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
    json.character_capabilities do
      json.ability_scores character.ability_score_block
      json.skills character.skill_block
      json.spells character.spell_list
    end
    json.inventory do
      json.armors character.character_armor_items
      json.shields character.character_shield_items
      json.weapons character.character_weapon_items
    end
    json.character_campaign character.campaign
  end
end
