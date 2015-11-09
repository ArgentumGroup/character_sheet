json.character do
  json.armor_class @character.armor_class
  json.character_id @character.id
  json.character_user_id @character.user_id
  json.character_name @character.name
  json.character_level @character.level
  json.character_race @character.race
  json.character_class @character.klass
  json.character_capabilities do
    json.ability_scores @character.ability_score_block
    json.skills @character.character_skill_items
    json.spells @character.character_spell_items
  end
  json.inventory do
    json.armors @character.character_armor_items do |item|
      json.equipped_armor item.armor
    end
    json.shields @character.character_shield_items do |item|
      json.equipped_shield item.shield
    end
    json.weapons @character.character_weapon_items do |item|
      json.equipped_weapons item.weapon
    end
  end
  json.character_campaign @character.campaign
end
