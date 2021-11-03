class CharactersController < ApplicationController
    def index
        render json: @current_user.characters, status: :ok
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
        if @current_user
            user = @current_user.characters.find_by(id: params[:id])
            user.destroy
            render json:{message: "Deleted character"}
        end
        # @character.destroy
        # head :no_content, status: :ok
    end

    private

    def find_character
        @character = Character.find_by(id: params[:id])
    end

    def character_params
        params.permit(:name, :ship, :skill, :description, :gold, :img_url, :user_id)
    end
end
