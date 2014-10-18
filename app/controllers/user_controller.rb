class UserController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    rendering user: @user
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