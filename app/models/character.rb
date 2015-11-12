class Character < ActiveRecord::Base
  belongs_to :user
  belongs_to :campaign
  belongs_to :klass
  has_one :inventory
  has_one :capability_block

  has_many :character_armor_items, through: :inventory
  has_many :character_shield_items, through: :inventory
  has_many :character_weapon_items, through: :inventory

  accepts_nested_attributes_for :inventory

  has_one :ability_score_block, through: :capability_block
  # has_many :character_klass_items, through: :capability_block
  has_many :character_skill_items, through: :capability_block
  has_many :character_spell_items, through: :capability_block

  accepts_nested_attributes_for :capability_block

  def armor_class
    if inventory.character_armor_items.last.armor.armor_type == "None" || inventory.character_armor_items.last.armor.armor_type == "Light"
      inventory.character_armor_items.last.armor.armor_class + inventory.character_shield_items.last.shield.armor_class + dexterity_ability_modifier
    elsif inventory.character_armor_items.last.armor.armor_type == "Medium" && dexterity_ability_modifier < 3
      inventory.character_armor_items.last.armor.armor_class + inventory.character_shield_items.last.shield.armor_class + dexterity_ability_modifier
    elsif inventory.character_armor_items.last.armor.armor_type == "Medium" && dexterity_ability_modifier > 2
      inventory.character_armor_items.last.armor.armor_class + inventory.character_shield_items.last.shield.armor_class + 2
    else
      inventory.character_armor_items.last.armor.armor_class + inventory.character_shield_items.last.shield.armor_class
    end
  end

  def initiative
    if dexterity_ability_modifier < 0
      dexterity_ability_modifier.to_s
    else
      "+#{dexterity_ability_modifier.to_s}"
    end
  end

  def weapon_to_hit
    if inventory.character_weapon_items.last.weapon.weapon_type == "Melee"
      if strength_ability_modifier + proficiency_bonus.to_i < 0
        (strength_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{strength_ability_modifier + proficiency_bonus.to_i}"
      end
    else
      if dexterity_ability_modifier + proficiency_bonus.to_i < 0
        (dexterity_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{dexterity_ability_modifier + proficiency_bonus.to_i}"
      end
    end
  end

  def strength_ability_modifier
    ((capability_block.ability_score_block.strength - 10) / 2)
  end

  def dexterity_ability_modifier
    ((capability_block.ability_score_block.dexterity - 10) / 2)
  end

  def constitution_ability_modifier
    ((capability_block.ability_score_block.constitution - 10) / 2)
  end

  def intelligence_ability_modifier
    ((capability_block.ability_score_block.intelligence - 10) / 2)
  end

  def wisdom_ability_modifier
    ((capability_block.ability_score_block.wisdom - 10) / 2)
  end

  def charisma_ability_modifier
    ((capability_block.ability_score_block.charisma - 10) / 2)
  end

  def strength_save_modifier
    if klass.strength_save_proficiency == true
      strength_ability_modifier + 2
    else
      strength_ability_modifier
    end
  end

  def dexterity_save_modifier
    if klass.dexterity_save_proficiency
      dexterity_ability_modifier + 2
    else
      dexterity_ability_modifier
    end
  end

  def constitution_save_modifier
    if klass.constitution_save_proficiency
      constitution_ability_modifier + 2
    else
      constitution_ability_modifier
    end
  end

  def intelligence_save_modifier
    if klass.intelligence_save_proficiency
      intelligence_ability_modifier + 2
    else
      intelligence_ability_modifier
    end
  end

  def wisdom_save_modifier
    if klass.wisdom_save_proficiency
      wisdom_ability_modifier + 2
    else
      wisdom_ability_modifier
    end
  end

  def charisma_save_modifier
    if klass.charisma_save_proficiency
      charisma_ability_modifier + 2
    else
      charisma_ability_modifier
    end
  end

  def hit_points
    constitution_ability_modifier + klass.hit_die
  end

  def proficiency_bonus
    "+2"
  end

  def acrobatics_modifier
    if acrobatics
      if dexterity_ability_modifier + proficiency_bonus.to_i < 0
        (dexterity_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(dexterity_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if dexterity_ability_modifier < 0
        dexterity_ability_modifier.to_s
      else
        "+#{dexterity_ability_modifier.to_s}"
      end
    end
  end

  def animal_handling_modifier
    if animal_handling
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

  def arcana_modifier
    if arcana
      if intelligence_ability_modifier + proficiency_bonus.to_i < 0
        (intelligence_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(intelligence_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if intelligence_ability_modifier < 0
        intelligence_ability_modifier.to_s
      else
        "+#{intelligence_ability_modifier.to_s}"
      end
    end
  end

  def athletics_modifier
    if athletics
      if strength_ability_modifier + proficiency_bonus.to_i < 0
        (strength_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(strength_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if strength_ability_modifier < 0
        strength_ability_modifier.to_s
      else
        "+#{strength_ability_modifier.to_s}"
      end
    end
  end

  def deception_modifier
    if deception
      if charisma_ability_modifier + proficiency_bonus.to_i < 0
        (charisma_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(charisma_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if charisma_ability_modifier < 0
        charisma_ability_modifier.to_s
      else
        "+#{charisma_ability_modifier.to_s}"
      end
    end
  end

  def history_modifier
    if history
      if intelligence_ability_modifier + proficiency_bonus.to_i < 0
        (intelligence_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(intelligence_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if intelligence_ability_modifier < 0
        intelligence_ability_modifier.to_s
      else
        "+#{intelligence_ability_modifier.to_s}"
      end
    end
  end

  def insight_modifier
    if insight
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

  def intimidation_modifier
    if intimidation
      if charisma_ability_modifier + proficiency_bonus.to_i < 0
        (charisma_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(charisma_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if charisma_ability_modifier < 0
        charisma_ability_modifier.to_s
      else
        "+#{charisma_ability_modifier.to_s}"
      end
    end
  end

  def investigation_modifier
    if investigation
      if intelligence_ability_modifier + proficiency_bonus.to_i < 0
        (intelligence_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(intelligence_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if intelligence_ability_modifier < 0
        intelligence_ability_modifier.to_s
      else
        "+#{intelligence_ability_modifier.to_s}"
      end
    end
  end

  def medicine_modifier
    if medicine
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

  def nature_modifier
    if nature
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

  def perception_modifier
    if perception
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

  def performance_modifier
    if performance
      if charisma_ability_modifier + proficiency_bonus.to_i < 0
        (charisma_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(charisma_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if charisma_ability_modifier < 0
        charisma_ability_modifier.to_s
      else
        "+#{charisma_ability_modifier.to_s}"
      end
    end
  end

  def persuasion_modifier
    if persuasion
      if charisma_ability_modifier + proficiency_bonus.to_i < 0
        (charisma_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(charisma_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if charisma_ability_modifier < 0
        charisma_ability_modifier.to_s
      else
        "+#{charisma_ability_modifier.to_s}"
      end
    end
  end
  def religion_modifier
    if religion
      if intelligence_ability_modifier + proficiency_bonus.to_i < 0
        (intelligence_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(intelligence_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if intelligence_ability_modifier < 0
        intelligence_ability_modifier.to_s
      else
        "+#{intelligence_ability_modifier.to_s}"
      end
    end
  end

  def sleight_of_hand_modifier
    if sleight_of_hand
      if dexterity_ability_modifier + proficiency_bonus.to_i < 0
        (dexterity_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(dexterity_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if dexterity_ability_modifier < 0
        dexterity_ability_modifier.to_s
      else
        "+#{dexterity_ability_modifier.to_s}"
      end
    end
  end

  def stealth_modifier
    if stealth
      if dexterity_ability_modifier + proficiency_bonus.to_i < 0
        (dexterity_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(dexterity_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if dexterity_ability_modifier < 0
        dexterity_ability_modifier.to_s
      else
        "+#{dexterity_ability_modifier.to_s}"
      end
    end
  end

  def survival_modifier
    if survival
      if wisdom_ability_modifier + proficiency_bonus.to_i < 0
        (wisdom_ability_modifier + proficiency_bonus.to_i).to_s
      else
        "+#{(wisdom_ability_modifier + proficiency_bonus.to_i).to_s}"
      end
    else
      if wisdom_ability_modifier < 0
        wisdom_ability_modifier.to_s
      else
        "+#{wisdom_ability_modifier.to_s}"
      end
    end
  end

end
