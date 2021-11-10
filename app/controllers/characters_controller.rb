class CharactersController < ApplicationController

    #@current_user refers to the current user logged in to the session

    # Index provides a list of all characters based on the user
    def index
        render json: @current_user.characters, status: :ok
    end

    # Show finds a character by their id 
    def show 
        character = find_character
        render json: character, status: :ok
    end

    # Create, creates a new character based on the parameters passed and adds it to the characters table where it recieves an id
    def create
        new_character = @current_user.characters.create!(character_params)
        render json: new_character, status: :created
    end

    # Update edits the character by allowing new values for the permitted params to replace the old ones
    def update
        character = find_character
        character.update!(character_params)
        render json: character, status: :ok
    end

    # Destroy deletes the character from the db and finds which one to delete by its id
    def destroy
        if @current_user
            user = @current_user.characters.find_by(id: params[:id])
            user.destroy
            render json:{message: "Deleted character"}
        end
    end

    def isEvilNow
        character = find_character
        character.update(name: "Evil " + params[:name])
        render json: character, status: :ok
    end

    private

    # This method finds characters by their respective Id
    def find_character
        @character = Character.find_by(id: params[:id])
    end

    # This method uses params which returns an ActionController::Parameters object
    def character_params
        params.permit(:name, :skill, :description, :img_url, :user_id)
    end
end
