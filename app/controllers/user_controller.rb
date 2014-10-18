class UserController < ApplicationController
  before_action :authenticate_user!

private
  def user_params
    params.require(:user).permit(:name, :surname, :city_id. :avatar)
  end

public
  def index
    @user = User.includes(:city).find current_user.id
    rendering user: @user.as_json(include: :city)
  end

  def update
    @user = current_user
    if @user.update(user_params)
      respond_to do |format|
        format.json { respond_ok }
        format.html { redirect_to user_path }
      end
    else
      respond_to do |format|
        format.json { respond_validation_error @user.errors.messages }
        format.html { render action: :index }
      end
    end
  end

  def tasks
    @tasks = current_user.tasks
    rendering tasks: @tasks
  end

  def responds
    @tasks = current_user.responded
    rendering tasks: @tasks
  end
end