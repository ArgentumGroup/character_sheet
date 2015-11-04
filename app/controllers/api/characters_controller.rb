class Api::CharactersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    # @characters = Character.all
    @user = @current_user
  end

  def show
    @character = Character.find(params[:id])
  end

  def create
    @character = Character.new character_params

    if @character.save

      @capblock = CapabilityBlock.create!(
        {character_id: @character.id}
        )

      @abilscores = AbilityScoreBlock.create!(
        {strength: 8, dexterity: 8, constitution: 8, intelligence: 8, wisdom: 8, charisma: 8, capability_block_id: @capblock.id}
        )
      @skillblock = SkillBlock.create!({capability_block_id: @capblock.id})
      @spelllist = SpellList.create!({capability_block_id: @capblock.id})

      @char_inventory = Inventory.create!(
        {character_id: @character.id}
        )

      char_armor = CharacterArmorItem.create!([
        {inventory_id: @char_inventory.id, armor_id: 1}
        ])
      char_shield = CharacterShieldItem.create!([
        {inventory_id: @char_inventory.id, shield_id: 1}
        ])
      char_weapon = CharacterWeaponItem.create!([
        {inventory_id: @char_inventory.id, weapon_id: 1}
        ])
    end
  end

  def update
    character_params
    @character = Character.find(params[:id])
    if @character.update_attributes(character_params)
      render :show
    end
  end

  private
    def character_params
      params.require(:character).permit(:user_id, :campaign_id, :name, :level, :klass, :race,
        capability_block_attributes:
          [ ability_score_block_attributes:
              [ :id, :strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma ],
            skill_block_attributes:
              [ :id, :skill_id ],
            spell_list_attributes:
              [ :id, :spell_id ]
          ],
        inventory_attributes:
          [ character_armor_items_attributes: [],
            character_shield_items_attributes: [],
            character_weapon_items_attributes: []
          ]
        )
    end

end
