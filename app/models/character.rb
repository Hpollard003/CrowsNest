class Character < ApplicationRecord
    # This macro is used assign the foreign key to the users id 
    belongs_to :user

    # This macro is used to validate the presence of the name param when a character is interacted with
    validates :name, presence: true
end
