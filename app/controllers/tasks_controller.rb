class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :create]

private
  def task_params
    params.require(:task).permit(:about, :date, :address, :lat, :lng)
  end

public
  def index
    @tasks = Task.by_city_if(user_signed_in?, current_user).not_completed.includes(user: :city).all
    rendering tasks: @tasks.as_json(include: { user: { include: :city, methods: [:avatar_url] } })
  end

  def show
    @task = Task.includes(user: :city).find params[:id]
    rendering task: @task.as_json(include: { user: { include: :city, methods: [:avatar_url] } })
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
        format.json { respond_validation_error @task.errors.messages }
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
        format.json { respond_validation_error @task.errors.messages }
        format.html { render action: :edit }
      end
    end
  end

  def destroy
    Task.by(current_user).not_completed.find(params[:id]).destroy
    respond_to do |format|
      format.json { respond_ok }
      format.html { redirect_to tasks_path }
    end
  end

  def apply
    @task = Task.not(current_user).find params[:id]
    if @task
      @user_task = UserTask.where(user: current_user).where(task: @task).first
      if @user_task
        respond result: :apply_already_exists
      else
        UserTask.create(user: current_user, task: @task)
        respond_ok
      end
    else
      respond result: :fail_apply_task
    end
  end

  def forget
    @user_task = UserTask.where(user: current_user).where(task: params[:id]).first
    if @user_task
      @user_task.destroy
      respond_ok
    else
      respond result: :link_not_exists
    end
  end
end