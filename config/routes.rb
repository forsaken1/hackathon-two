Rails.application.routes.draw do
  root 'application#index'

  get  'tasks',             to: 'tasks#index'
  post 'tasks',             to: 'tasks#create'
  get  'tasks/:id',         to: 'tasks#show'
  post 'tasks/:id',         to: 'tasks#update'
  get  'tasks/:id/edit',    to: 'tasks#edit'
  get  'tasks/:id/apply',   to: 'tasks#apply'
  get  'tasks/:id/forget',  to: 'tasks#forget'
  post 'tasks/:id/destroy', to: 'tasks#destroy'

  get  'user',              to: 'user#index'
  post 'user',              to: 'user#update'
  get  'user/responds',     to: 'user#responds'
  get  'user/tasks',        to: 'user#tasks'

  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
end
