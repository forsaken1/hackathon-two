class TasksController < ApplicationController

  def index
    @tasks = Task.by_city_if(user_signed_in?).all
    rendering tasks: @tasks
  end

  def show
    @task = Task.find params[:id]
    rendering task: @task
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end

  def apply
  end
end