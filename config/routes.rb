Rails.application.routes.draw do
  root 'application#index'

  get  'tasks',             to: 'tasks#index'
  post 'tasks',             to: 'tasks#create'
  get  'tasks/:id',         to: 'tasks#show'
  get  'tasks/:id/apply',   to: 'tasks#apply'
  post 'tasks/:id/destroy', to: 'tasks#destroy'

  get  'user',              to: 'user#index'
  get  'user/responds',     to: 'user#responds'
  get  'user/tasks',        to: 'user#tasks'
  
  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
end
