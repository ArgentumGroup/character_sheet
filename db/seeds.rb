# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Armor.delete_all
Weapon.delete_all
# AbilityScore.delete_all
Character.delete_all
User.delete_all
Campaign.delete_all
Skill.delete_all

armors = Armor.create!([
  {armor_type: 'None', name: 'Unarmored', cost: 0, armor_class: 10, stealth_disadvantage: false, weight: 0},
  {armor_type: 'Light', name: 'Padded', cost: 500, armor_class: 11, stealth_disadvantage: false, weight: 8},
  {armor_type: 'Light', name: 'Leather', cost: 1000, armor_class: 11, stealth_disadvantage: false, weight: 10},
  {armor_type: 'Light', name: 'Studded leather', cost: 4500, armor_class: 12, stealth_disadvantage: false, weight: 13},
  {armor_type: 'Medium', name: 'Hide', cost: 1000, armor_class: 12, stealth_disadvantage: false, weight: 12},
  {armor_type: 'Medium', name: 'Chain shirt', cost: 5000, armor_class: 13, stealth_disadvantage: false, weight: 20},
  {armor_type: 'Medium', name: 'Scale mail', cost: 5000, armor_class: 14, stealth_disadvantage: true, weight: 45},
  {armor_type: 'Medium', name: 'Breastplate', cost: 40000, armor_class: 14, stealth_disadvantage: false, weight: 20},
  {armor_type: 'Medium', name: 'Half plate', cost: 75000, armor_class: 15, stealth_disadvantage: true, weight: 40},
  {armor_type: 'Heavy', name: 'Ring mail', cost: 3000, armor_class: 14, stealth_disadvantage: true, weight: 40},
  {armor_type: 'Heavy', name: 'Chain mail', cost: 7500, armor_class: 16, strength_requirement: 13, stealth_disadvantage: true, weight: 55},
  {armor_type: 'Heavy', name: 'Splint', cost: 20000, armor_class: 17, strength_requirement: 15, stealth_disadvantage: true, weight: 60},
  {armor_type: 'Heavy', name: 'Plate', cost: 150000, armor_class: 18, strength_requirement: 15, stealth_disadvantage: true, weight: 65},
  ])

shields = Shield.create!([
  {name: 'None', cost: 0, armor_class: 0, stealth_disadvantage: false, weight: 0},
  {name: 'Shield', cost: 1000, armor_class: 2, stealth_disadvantage: false, weight: 6},
  ])

weapons = Weapon.create!([
  {weapon_type: 'Melee', category: 'Unarmed', name: 'Unarmed Strike', cost: 0, damage_die_number: 1, damage_die_type: 1, damage_type: 'bludgeoning', weight: 0},
  {weapon_type: 'Melee', category: 'Simple', name: 'Club', cost: 10, damage_die_number: 1, damage_die_type: 4, damage_type: 'bludgeoning', weight: 2},
  {weapon_type: 'Melee', category: 'Simple', name: 'Dagger', cost: 200, damage_die_number: 1, damage_die_type: 4, damage_type: 'piercing', weight: 1},
  {weapon_type: 'Melee', category: 'Simple', name: 'Greatclub', cost: 20, damage_die_number: 1, damage_die_type: 8, damage_type: 'bludgeoning', weight: 10},
  {weapon_type: 'Melee', category: 'Simple', name: 'Handaxe', cost: 500, damage_die_number: 1, damage_die_type: 6, damage_type: 'slashing', weight: 2},
  {weapon_type: 'Melee', category: 'Simple', name: 'Javelin', cost: 50, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Melee', category: 'Simple', name: 'Light hammer', cost: 200, damage_die_number: 1, damage_die_type: 4, damage_type: 'bludgeoning', weight: 2},
  {weapon_type: 'Melee', category: 'Simple', name: 'Mace', cost: 500, damage_die_number: 1, damage_die_type: 6, damage_type: 'bludgeoning', weight: 4},
  {weapon_type: 'Melee', category: 'Simple', name: 'Quarterstaff', cost: 20, damage_die_number: 1, damage_die_type: 6, damage_type: 'bludgeoning', weight: 4},
  {weapon_type: 'Melee', category: 'Simple', name: 'Sickle', cost: 100, damage_die_number: 1, damage_die_type: 4, damage_type: 'slashing', weight: 2},
  {weapon_type: 'Melee', category: 'Simple', name: 'Spear', cost: 100, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 3},
  {weapon_type: 'Ranged', category: 'Simple', name: 'Crossbow, light', cost: 2500, damage_die_number: 1, damage_die_type: 8, damage_type: 'piercing', weight: 5},
  {weapon_type: 'Ranged', category: 'Simple', name: 'Dart', cost: 5, damage_die_number: 1, damage_die_type: 4, damage_type: 'piercing', weight: 0.25},
  {weapon_type: 'Ranged', category: 'Simple', name: 'Shortbow', cost: 2500, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Ranged', category: 'Simple', name: 'Sling', cost: 10, damage_die_number: 1, damage_die_type: 4, damage_type: 'bludgeoning', weight: 0},
  {weapon_type: 'Melee', category: 'Martial', name: 'Battleaxe', cost: 1000, damage_die_number: 1, damage_die_type: 8, damage_type: 'slashing', weight: 4},
  {weapon_type: 'Melee', category: 'Martial', name: 'Flail', cost: 1000, damage_die_number: 1, damage_die_type: 8, damage_type: 'bludgeoning', weight: 2},
  {weapon_type: 'Melee', category: 'Martial', name: 'Glaive', cost: 2000, damage_die_number: 1, damage_die_type: 10, damage_type: 'slashing', weight: 6},
  {weapon_type: 'Melee', category: 'Martial', name: 'Greataxe', cost: 3000, damage_die_number: 1, damage_die_type: 12, damage_type: 'slashing', weight: 7},
  {weapon_type: 'Melee', category: 'Martial', name: 'Greatsword', cost: 5000, damage_die_number: 2, damage_die_type: 6, damage_type: 'slashing', weight: 6},
  {weapon_type: 'Melee', category: 'Martial', name: 'Halberd', cost: 2000, damage_die_number: 1, damage_die_type: 10, damage_type: 'slashing', weight: 6},
  {weapon_type: 'Melee', category: 'Martial', name: 'Lance', cost: 1000, damage_die_number: 1, damage_die_type: 12, damage_type: 'piercing', weight: 6},
  {weapon_type: 'Melee', category: 'Martial', name: 'Longsword', cost: 1500, damage_die_number: 1, damage_die_type: 8, damage_type: 'slashing', weight: 3},
  {weapon_type: 'Melee', category: 'Martial', name: 'Maul', cost: 1000, damage_die_number: 2, damage_die_type: 6, damage_type: 'bludgeoning', weight: 10},
  {weapon_type: 'Melee', category: 'Martial', name: 'Morningstar', cost: 1500, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 4},
  {weapon_type: 'Melee', category: 'Martial', name: 'Pike', cost: 500, damage_die_number: 1, damage_die_type: 10, damage_type: 'piercing', weight: 18},
  {weapon_type: 'Melee', category: 'Martial', name: 'Rapier', cost: 2500, damage_die_number: 1, damage_die_type: 8, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Melee', category: 'Martial', name: 'Scimitar', cost: 2500, damage_die_number: 1, damage_die_type: 6, damage_type: 'slashing', weight: 3},
  {weapon_type: 'Melee', category: 'Martial', name: 'Shortsword', cost: 1000, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Melee', category: 'Martial', name: 'Trident', cost: 500, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 4},
  {weapon_type: 'Melee', category: 'Martial', name: 'War pick', cost: 500, damage_die_number: 1, damage_die_type: 8, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Melee', category: 'Martial', name: 'Warhammer', cost: 1500, damage_die_number: 1, damage_die_type: 8, damage_type: 'bludgeoning', weight: 2},
  {weapon_type: 'Melee', category: 'Martial', name: 'Whip', cost: 200, damage_die_number: 1, damage_die_type: 4, damage_type: 'slashing', weight: 3},
  {weapon_type: 'Ranged', category: 'Martial', name: 'Blowgun', cost: 1000, damage_die_number: 1, damage_die_type: 1, damage_type: 'piercing', weight: 1},
  {weapon_type: 'Ranged', category: 'Martial', name: 'Crossbow, hand', cost: 7500, damage_die_number: 1, damage_die_type: 6, damage_type: 'piercing', weight: 3},
  {weapon_type: 'Ranged', category: 'Martial', name: 'Crossbow, heavy', cost: 5000, damage_die_number: 1, damage_die_type: 10, damage_type: 'piercing', weight: 18},
  {weapon_type: 'Ranged', category: 'Martial', name: 'Longbow', cost: 5000, damage_die_number: 1, damage_die_type: 8, damage_type: 'piercing', weight: 2},
  {weapon_type: 'Ranged', category: 'Martial', name: 'Net', cost: 100, weight: 3},
  ])

# ability_scores = AbilityScore.create! ([
#   {name: 'Strength'},
#   {name: 'Dexterity'},
#   {name: 'Constitution'},
#   {name: 'Intelligence'},
#   {name: 'Wisdom'},
#   {name: 'Charisma'}
#   ])



# characters = Character.create! ([
#   {name: 'First character', level: '3', race: 'Elf, wood', klass_id: 1, campaign_id: 1, user_id: 1},
#   {name: 'Second character', level: '8', race: 'Elf, high', klass_id: 4, campaign_id: 2, user_id: 1},
#   {name: 'Third character', level: '1', race: 'Human, base', klass_id: 2, campaign_id: 2, user_id: 2},
#   {name: 'Fourth character', level: '10', race: 'Dwarf, mountain', klass_id: 3, campaign_id: 2, user_id: 2},
#   {name: 'Fifth character', level: '20', race: 'Dwarf, hill', klass_id: 3, campaign_id: 1, user_id: 2},
#   ])

# campaigns = Campaign.create! ([
#   {name: 'First Campaign'},
#   {name: 'Second Campaign'}
#   ])

# users = User.create! ([
#   {name: "Dr. Fart", email: "Fart@clown.co", password: "12345678"},
#   # {name: "Dr. Poop, II", email: "poop@clown.co", password: "12345678"}
# ])

klasses = Klass.create! ([
  {name: 'Cleric', description: 'A priestly champion who wields divine magic in service of a higher power', hit_die: 8, strength_save_proficiency: false, dexterity_save_proficiency: false, constitution_save_proficiency: false, intelligence_save_proficiency: false, wisdom_save_proficiency: true, charisma_save_proficiency: true, light_armor_proficiency: true, medium_armor_proficiency: true, heavy_armor_proficiency: false, simple_weapon_proficiency: true, martial_weapon_proficiency: false, shield_proficiency: true, spellcaster: true, caster_type: 'Cleric'},
  {name: 'Fighter', description: 'A master of martial combat, skilled with a variety of weapons and armor', hit_die: 10, strength_save_proficiency: true, dexterity_save_proficiency: false, constitution_save_proficiency: true, intelligence_save_proficiency: false, wisdom_save_proficiency: false, charisma_save_proficiency: false, light_armor_proficiency: true, medium_armor_proficiency: true, heavy_armor_proficiency: true, simple_weapon_proficiency: true, martial_weapon_proficiency: true, shield_proficiency: true, spellcaster: false, caster_type: 'None'},
  {name: 'Rogue', description:'A scoundrel who uses stealth and trickery to overcome obstacles and enemies', hit_die: 8, strength_save_proficiency: false, dexterity_save_proficiency: true, constitution_save_proficiency: false, intelligence_save_proficiency: true, wisdom_save_proficiency:false, charisma_save_proficiency: false, light_armor_proficiency: true, medium_armor_proficiency: false, heavy_armor_proficiency: false, simple_weapon_proficiency: true, martial_weapon_proficiency: false, shield_proficiency: false, spellcaster: false, caster_type: 'None'},
  {name: 'Wizard', description: 'A scholarly magic-user capable of manipulating the structures of reality', hit_die: 6, strength_save_proficiency: false, dexterity_save_proficiency: false, constitution_save_proficiency: false, intelligence_save_proficiency: true, wisdom_save_proficiency: true, charisma_save_proficiency: false, light_armor_proficiency: false, medium_armor_proficiency: false, heavy_armor_proficiency: false, simple_weapon_proficiency: false, martial_weapon_proficiency: false, shield_proficiency: false, spellcaster: true, caster_type: 'Wizard'}
])

skills = Skill.create! ([
{name: "Acrobatics", governing_ability: "Dexterity"},
{name: "Animal handling", governing_ability: "Wisdom"},
{name: "Arcana", governing_ability: "Intelligence"},
{name: "Athletics", governing_ability: "Strength"},
{name: "Deception", governing_ability: "Charisma"},
{name: "History", governing_ability: "Intelligence"},
{name: "Insight", governing_ability: "Wisdom"},
{name: "Intimidation", governing_ability: "Charisma"},
{name: "Investigation", governing_ability: "Intelligence"},
{name: "Medicine", governing_ability: "Wisdom"},
{name: "Nature", governing_ability: "Intelligence"},
{name: "Perception", governing_ability: "Wisdom"},
{name: "Performance", governing_ability: "Charisma"},
{name: "Persuasion", governing_ability: "Charisma"},
{name: "Religion", governing_ability: "Intelligence"},
{name: "Sleight of hand", governing_ability: "Dexterity"},
{name: "Stealth", governing_ability: "Dexterity"},
{name: "Survival", governing_ability: "Wisdom"},
  ])

spells = Spell.create! ([
  {name: "Bless", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "30 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a sprinkling of holy water)", duration: "Concentration, up to 1 minute", description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw."},
  {name: "Command", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "60 feet", verbal: true, somatic: false, material: false, components: "V", duration: "1 round", description: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no e ect if the target is undead, if it doesn’t understand your language, or if your command is directly harmful to it."},
  {name: "Cure Wounds", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."},
  {name: "Detect Magic", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "Self", verbal: true, somatic: true, material: false, components: "V, S", duration: "Concentration, up to 10 minutes", description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any."},
  {name: "Guidance", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."},
  {name: "Guiding Light", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "120 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 round", description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."},
  {name: "Healing Word", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "60 feet", verbal: true, somatic: false, material: false, components: "V", duration: "Instantaneous", description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."},
  {name: "Inflict Wounds", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage."},
  {name: "Light", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: false, material: true, components: "V, M (a firefly or phosphorescent moss)", duration: "1 hour", description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action."},
  {name: "Resistance", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: true, components: "V, S, M (a miniature cloak)", duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."},
  {name: "Sacred Flame", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "60 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw."},
  {name: "Sanctuary", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "30 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a small silver mirror)", duration: "1 minute", description: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."},
  {name: "Shield of Faith", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "60 feet", verbal: , somatic: , material: , components: "V, S, M (a small parchment with a bit of holy text written on it)", duration: "Concentration, up to 10 minutes", description: "A shimmering shield appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."},
  {name: "Spare the Dying", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."},
  {name: "Thaumaturgy", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "30 feet", verbal: true, somatic: false, material: false, components: "V", duration: "Up to 1 minute", description: "You manifest a minor wonder, a sign of supernatural power, within range. This wonder can take the form of a supernaturally booming voice, flickering or altered flames, out-of-place or incongruent noises, harmless ground tremors, an unlocked door or window slamming shut or flying open, or an alteration in the appearance of the caster's eyes. If you cast this spell multiple times, you can have up to three of its 1-minute e ects active at a time, and you can dismiss such an e ect as an action."},

  ])


# characters.each do |character|
#   users.each do |user|
#     ['First campaign', 'Second campaign'].each do |campaign_name|
#       Campaign.create! name: campaign_name, user: user, character: character
#     end
#   end
# end

# {"game"=>
#   {"name"=>"championship", "teams_attributes"=>
#     [ {"result"=>"won", "players_attributes"=>{"name"=>"Bob"}},
#       {"result"=>"lost", "players_attributes"=>{"name"=>"Tad"}}]}}
#
# But should be:
#
# {"game"=>
#   {"name"=>"championship", "teams_attributes"=>
#     [ {"result"=>"won", "players_attributes"=>[{"name"=>"Bob"}]},
#     {"result"=>"lost", "players_attributes"=>[{"name"=>"Tad"}]}]}}
