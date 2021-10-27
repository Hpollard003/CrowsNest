class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :ship, :skill, :position, :gold, :user_id
end
