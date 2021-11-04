class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :skill, :description, :img_url, :user_id
end
