class Api::CharactersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    # @characters = Character.all
    @user = @current_user
    if @current_character.present?
      session.delete :character_id
    end
  end

  def show
    @character = Character.find(params[:id])
    if @current_character.nil?
      session[:character_id] = @character.id
      @current_character = Character.find_by id: session[:character_id]
    end
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
      @skillblock = CharacterSkillItem.create!([{capability_block_id: @capblock.id, skill_id: nil}])
      @spelllist = CharacterSpellItem.create!([{capability_block_id: @capblock.id, spell_id: nil}])

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

      session[:character_id] = @character.id
    end
  end

  def update
    @curr_char = Character.find_by id: params[:id]
    if @curr_char.update_attributes(character_params)
      render json: @curr_char
    end
  end

  private
    def character_params
      params.require(:character).permit(:user_id, :campaign_id, :name, :level, :race, :klass_id, :acrobatics, :animal_handling, :arcana, :athletics, :deception, :history, :insight, :intimidation, :investigation, :medicine, :nature, :perception, :performance, :persuasion, :religion, :sleight_of_hand, :stealth, :survival,
        capability_block_attributes:
          [ :id,
            ability_score_block_attributes:
              [ :id, :strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma ],
            # character_klass_items_attributes:
            #   [ :id, :klass_id ],
            character_skill_item_attributes:
              [ :id, :skill_id ],
            character_spell_item_attributes:
              [ :id, :spell_id ]
          ],
        inventory_attributes:
          [ :id,
            character_armor_items_attributes: [],
            character_shield_items_attributes: [],
            character_weapon_items_attributes: []
          ]
        )
    end

end
