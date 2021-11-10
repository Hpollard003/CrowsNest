class CharacterSerializer < ActiveModel::Serializer
  # Serializers controls what gets rendered  
  attributes :id, :name, :skill, :description, :img_url, :user_id
end
