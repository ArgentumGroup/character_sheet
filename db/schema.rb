# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151112011950) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ability_score_blocks", force: :cascade do |t|
    t.integer  "strength"
    t.integer  "dexterity"
    t.integer  "constitution"
    t.integer  "intelligence"
    t.integer  "wisdom"
    t.integer  "charisma"
    t.integer  "capability_block_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "armors", force: :cascade do |t|
    t.string   "armor_type"
    t.string   "name"
    t.integer  "cost"
    t.integer  "armor_class"
    t.integer  "strength_requirement"
    t.boolean  "stealth_disadvantage"
    t.decimal  "weight"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "campaigns", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "capability_blocks", force: :cascade do |t|
    t.integer  "character_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "character_armor_items", force: :cascade do |t|
    t.integer  "inventory_id"
    t.integer  "armor_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "character_shield_items", force: :cascade do |t|
    t.integer  "inventory_id"
    t.integer  "shield_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "character_skill_items", force: :cascade do |t|
    t.integer  "skill_id"
    t.integer  "capability_block_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "character_spell_items", force: :cascade do |t|
    t.integer  "spell_id"
    t.integer  "capability_block_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "character_weapon_items", force: :cascade do |t|
    t.integer  "inventory_id"
    t.integer  "weapon_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "characters", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "campaign_id"
    t.string   "name"
    t.integer  "level"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "race"
    t.integer  "klass_id"
    t.boolean  "acrobatics",      default: false
    t.boolean  "animal_handling", default: false
    t.boolean  "arcana",          default: false
    t.boolean  "athletics",       default: false
    t.boolean  "deception",       default: false
    t.boolean  "history",         default: false
    t.boolean  "insight",         default: false
    t.boolean  "intimidation",    default: false
    t.boolean  "investigation",   default: false
    t.boolean  "medicine",        default: false
    t.boolean  "nature",          default: false
    t.boolean  "perception",      default: false
    t.boolean  "performance",     default: false
    t.boolean  "persuasion",      default: false
    t.boolean  "religion",        default: false
    t.boolean  "sleight_of_hand", default: false
    t.boolean  "stealth",         default: false
    t.boolean  "survival",        default: false
  end

  create_table "inventories", force: :cascade do |t|
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "character_id"
  end

  create_table "klasses", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "hit_die"
    t.boolean  "strength_save_proficiency"
    t.boolean  "dexterity_save_proficiency"
    t.boolean  "constitution_save_proficiency"
    t.boolean  "intelligence_save_proficiency"
    t.boolean  "wisdom_save_proficiency"
    t.boolean  "charisma_save_proficiency"
    t.boolean  "light_armor_proficiency"
    t.boolean  "medium_armor_proficiency"
    t.boolean  "heavy_armor_proficiency"
    t.boolean  "simple_weapon_proficiency"
    t.boolean  "martial_weapon_proficiency"
    t.boolean  "shield_proficiency"
    t.boolean  "spellcaster"
    t.string   "caster_type"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "shields", force: :cascade do |t|
    t.string   "name"
    t.integer  "cost"
    t.integer  "armor_class"
    t.boolean  "stealth_disadvantage"
    t.decimal  "weight"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "skills", force: :cascade do |t|
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "name"
    t.string   "governing_ability"
  end

  create_table "spells", force: :cascade do |t|
    t.string   "name"
    t.boolean  "cleric"
    t.boolean  "wizard"
    t.integer  "level"
    t.string   "casting_time"
    t.string   "range"
    t.boolean  "verbal"
    t.boolean  "somatic"
    t.boolean  "material"
    t.string   "components"
    t.string   "duration"
    t.text     "description"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
  end

  create_table "weapons", force: :cascade do |t|
    t.string   "weapon_type"
    t.string   "category"
    t.string   "name"
    t.integer  "cost"
    t.integer  "damage_die_number"
    t.integer  "damage_die_type"
    t.string   "damage_type"
    t.decimal  "weight"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
