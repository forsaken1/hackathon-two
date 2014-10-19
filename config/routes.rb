Rails.application.routes.draw do
  root 'application#index'

  get  'tasks',             to: 'tasks#index'
  post 'tasks',             to: 'tasks#create'
  get  'tasks/new',         to: 'tasks#new'
  get  'tasks/:id',         to: 'tasks#show', as: :task
  post 'tasks/:id',         to: 'tasks#update'
  get  'tasks/:id/edit',    to: 'tasks#edit'
  get  'tasks/:id/apply',   to: 'tasks#apply', as: :task_apply
  get  'tasks/:id/forget',  to: 'tasks#forget', as: :task_forget
  get  'tasks/:id/destroy', to: 'tasks#destroy', as: :task_destroy

  get  'user',              to: 'user#index'
  post 'user',              to: 'user#update'
  get  'user/responds',     to: 'user#responds'
  get  'user/tasks',        to: 'user#tasks', as: :user_tasks

  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
end
