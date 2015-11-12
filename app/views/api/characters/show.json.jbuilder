json.character do
  json.armor_class @character.armor_class
  json.weapon_to_hit @character.weapon_to_hit
  json.initiative @character.initiative
  json.hit_points @character.hit_points
  json.proficiency_bonus @character.proficiency_bonus
  json.strength_modifier @character.strength_ability_modifier
  json.dexterity_modifier @character.dexterity_ability_modifier
  json.constitution_modifier @character.constitution_ability_modifier
  json.intelligence_modifier @character.intelligence_ability_modifier
  json.wisdom_modifier @character.wisdom_ability_modifier
  json.charisma_modifier @character.charisma_ability_modifier
  json.strength_save @character.strength_save_modifier
  json.dexterity_save @character.dexterity_save_modifier
  json.constitution_save @character.constitution_save_modifier
  json.intelligence_save @character.intelligence_save_modifier
  json.wisdom_save @character.wisdom_save_modifier
  json.charisma_save @character.charisma_save_modifier
  json.skill_proficiencies do
    json.acrobatics @character.acrobatics_modifier
    json.acrobatics_proficiency @character.acrobatics
    json.animal_handling @character.animal_handling_modifier
    json.animal_handling_proficiency @character.animal_handling
    json.arcana @character.arcana_modifier
    json.arcana_proficiency @character.arcana
    json.athletics @character.athletics_modifier
    json.athletics_proficiency @character.athletics
    json.deception @character.deception_modifier
    json.deception_proficiency @character.deception
    json.history @character.history_modifier
    json.history_proficiency @character.history
    json.insight @character.insight_modifier
    json.insight_proficiency @character.insight
    json.intimidation @character.intimidation_modifier
    json.intimidation_proficiency @character.intimidation
    json.investigation @character.investigation_modifier
    json.investigation_proficiency @character.investigation
    json.medicine @character.medicine_modifier
    json.medicine_proficiency @character.medicine
    json.nature @character.nature_modifier
    json.nature_proficiency @character.nature
    json.perception @character.perception_modifier
    json.perception_proficiency @character.perception
    json.performance @character.performance_modifier
    json.performance_proficiency @character.performance
    json.persuasion @character.persuasion_modifier
    json.persuasion_proficiency @character.persuasion
    json.religion @character.religion_modifier
    json.religion_proficiency @character.religion
    json.sleight_of_hand @character.sleight_of_hand_modifier
    json.sleight_of_hand_proficiency @character.sleight_of_hand
    json.stealth @character.stealth_modifier
    json.stealth_proficiency @character.stealth
    json.survival @character.survival_modifier
    json.survival_proficiency @character.survival
  end
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
