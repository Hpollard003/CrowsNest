class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :ship, :skill, :description, :gold, :img_url, :user_id
end
