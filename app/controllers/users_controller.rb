class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # returns all users
  def index
    render json: User.all, include: :characters, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private
  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
