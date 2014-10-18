class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

private
  def task_params
    params.require(:task).permit(:about, :date, :address)
  end

public
  def index
    @tasks = Task.by_city_if(user_signed_in?, current_user).not_completed.all
    rendering tasks: @tasks
  end

  def show
    @task = Task.find params[:id]
    rendering task: @task
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new task_params.merge(user: current_user)

    if @task.save
      respond_to do |format|
        format.json { respond_ok }
        format.html { redirect_to tasks_path }
      end
    else
      respond_to do |format|
        format.json { respond_error_validation @task.errors.messages }
        format.html { render action: :new }
      end
    end
  end

  def edit
    @task = Task.by(current_user).find params[:id]
  end

  def update
    @task = Task.by(current_user).find params[:id]

    if @task.update(task_params)
      respond_to do |format|
        format.json { respond_ok }
        format.html { redirect_to tasks_path }
      end
    else
      respond_to do |format|
        format.json { respond_error_validation @task.errors.messages }
        format.html { render action: :edit }
      end
    end
  end

  def destroy
    Task.by(current_user).find(params[:id]).destroy
    respond_to do |format|
      format.json { respond_ok }
      format.html { redirect_to tasks_path }
    end
  end

  def apply
    @task = Task.not(current_user).find params[:id]
    if @task
      @user_task = UserTask.create(user: current_user, task: @task)
      respond_ok
    else
      respond result: :fail_apply
    end
  end
end