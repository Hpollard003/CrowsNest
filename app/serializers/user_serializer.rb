class UserSerializer < ActiveModel::Serializer
  # By adding characters to the serializer we get a nested array of character objects
  attributes :id, :img_url, :username, :password_digest, :characters
end
