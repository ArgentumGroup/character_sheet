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

ActiveRecord::Schema.define(version: 20151030164104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ability_scores", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
    t.integer  "score"
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

  create_table "characters", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "campaign_id"
    t.string   "name"
    t.integer  "level"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "klass"
    t.string   "race"
  end

  create_table "inventories", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "name"
    t.string   "governing_ability"
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
