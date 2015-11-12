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
Spell.delete_all

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
  {name: "Detect Magic", cleric: true, wizard: true, level: 1, casting_time: "1 action", range: "Self", verbal: true, somatic: true, material: false, components: "V, S", duration: "Concentration, up to 10 minutes", description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any."},
  {name: "Guidance", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."},
  {name: "Guiding Light", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "120 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 round", description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."},
  {name: "Healing Word", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "60 feet", verbal: true, somatic: false, material: false, components: "V", duration: "Instantaneous", description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."},
  {name: "Inflict Wounds", cleric: true, wizard: false, level: 1, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage."},
  {name: "Light", cleric: true, wizard: true, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: false, material: true, components: "V, M (a firefly or phosphorescent moss)", duration: "1 hour", description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action."},
  {name: "Resistance", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: true, components: "V, S, M (a miniature cloak)", duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."},
  {name: "Sacred Flame", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "60 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw."},
  {name: "Sanctuary", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "30 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a small silver mirror)", duration: "1 minute", description: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."},
  {name: "Shield of Faith", cleric: true, wizard: false, level: 1, casting_time: "1 bonus action", range: "60 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a small parchment with a bit of holy text written on it)", duration: "Concentration, up to 10 minutes", description: "A shimmering shield appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."},
  {name: "Spare the Dying", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."},
  {name: "Thaumaturgy", cleric: true, wizard: false, level: 0, casting_time: "1 action", range: "30 feet", verbal: true, somatic: false, material: false, components: "V", duration: "Up to 1 minute", description: "You manifest a minor wonder, a sign of supernatural power, within range. This wonder can take the form of a supernaturally booming voice, flickering or altered flames, out-of-place or incongruent noises, harmless ground tremors, an unlocked door or window slamming shut or flying open, or an alteration in the appearance of the caster's eyes. If you cast this spell multiple times, you can have up to three of its 1-minute e ects active at a time, and you can dismiss such an e ect as an action."},
  {name: "Acid Splash", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "60 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage."},
  {name: "Burning Hands", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "Self (15-foot cone)", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried."},
  {name: "Charm Person", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "30 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 hour", description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."},
  {name: "Comprehend Languages", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "Self", verbal: true, somatic: true, material: true, components: "V, S, M (a pinch of soot and salt)", duration: "1 hour", description: "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text."},
  {name: "Dancing Lights", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "120 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)", duration: "Concentration, up to 1 minute", description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range."},
  {name: "Disguise Self", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "Self", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 hour", description: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you."},
  {name: "Fire Bolt", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "120 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried."},
  {name: "Identify", cleric: false, wizard: true, level: 1, casting_time: "1 minute", range: "Touch", verbal: true, somatic: true, material: true, components: "V, S, M (a pearl worth at least 100 gp and an owl feather)", duration: "Instantaneous", description: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."},
  {name: "Mage Armor", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: true, components: "V, S, M (a piece of cured leather)", duration: "8 hours", description: "You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."},
  {name: "Mage Hand", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "30 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 minute", description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can’t attack, activate magic items, or carry more than 10 pounds."},
  {name: "Magic Missile", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "120 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several."},
  {name: "Minor Illusion", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "30 feet", verbal: false, somatic: true, material: true, components: "S, M (a bit of fleece)", duration: "1 minute", description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC."},
  {name: "Poison Spray", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "10 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."},
  {name: "Prestidigitation", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "10 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Up to 1 hour", description: "This spell is a minor magical trick that novice spellcasters use for practice. This spell can take the form of a harmless sensory effect, the lighting or snuffing of a small flame (candle to small campfire), the cleaning or soiling of a small item no more than 1 cubic foot in size, the chilling (or warming or flavoring) of 1 cubic foot of nonliving matter, the application of some kind of mark on an object or surface, a nonmagical trinket or image that can fit in the palm of your hand and lasts until your next turn."},
  {name: "Ray of Frost", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "60 feet", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn."},
  {name: "Shield", cleric: false, wizard: true, level: 1, casting_time: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell", range: "Self", verbal: true, somatic: true, material: false, components: "V, S", duration: "1 round", description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."},
  {name: "Shocking Grasp", cleric: false, wizard: true, level: 0, casting_time: "1 action", range: "Touch", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn."},
  {name: "Silent Image", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "60 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a bit of fleece)", duration: "Concentration, up to 10 minutes", description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. You can use your action to cause the image to move to any spot within range. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC."},
  {name: "Sleep", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "90 feet", verbal: true, somatic: true, material: true, components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)", duration: "1 minute", description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected."},
  {name: "Thunderwave", cleric: false, wizard: true, level: 1, casting_time: "1 action", range: "Self (15-foot cube)", verbal: true, somatic: true, material: false, components: "V, S", duration: "Instantaneous", description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet."},

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
