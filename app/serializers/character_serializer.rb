class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :ship, :skill_level, :description, :img_url, :user_id
end
