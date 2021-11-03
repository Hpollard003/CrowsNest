class UserSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :username, :password_digest, :characters
end
