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
    @character = Character.new params.require(:character).permit(:user_id, :campaign_id)

    if @character.save

      abilscores = AbilityScoreBlock.create!([
        {strength: 8, dexterity: 8, constitution: 8, intelligence: 8, wisdom: 8, charisma: 8}
        ])
      skillblock = SkillBlock.create!([{}])
      spelllist = SpellList.create!([{}])

      capblock = CapabilityBlock.create!([
        {character_id: @character.id, ability_score_block_id: abilscores.id, skill_block_id: skillblock.id, spell_list_id: spelllist.id}
        ])

      char_inventory = Inventory.create!([
        {character_id: @character.id}
        ])

      char_armor = CharacterArmorItem.create!([
        {inventory_id: @charinventory.id, armor_id: 1}
        ])
      char_shield = CharacterShieldItem.create!([
        {inventory_id: @charinventory.id, shield_id: 1}
        ])
      char_weapon = CharacterWeaponItem.create!([
        {inventory_id: @charinventory.id, weapon_id: 1}
        ])
    end
  end

  def update
    @character = Character.find(params[:id])
    if @character.update_attributes(character_params)
      render :show
    end
  end

end
