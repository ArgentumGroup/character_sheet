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

end
