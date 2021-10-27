class CharactersController < ApplicationController
    def index
        render json: Character.all, status: :ok
    end

    def show 
        character = find_character
        render json: character, status: :ok
    end

    def create
        new_character = Character.create!(character_params)
        render json: new_character, status: :created
    end

    def update
        character = find_character
        character.update!(character_params)
        render json: character, status: :ok
    end

    def destroy
        character = find_character
        character.destroy!
        render json: no_content
    end

    private

    def find_character
        Character.find_by(id: params[:id])
    end

    def character_params
        params.permit(:name, :ship, :skill, :position, :gold, :user_id)
    end
end
