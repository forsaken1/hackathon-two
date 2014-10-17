Rails.application.routes.draw do
  root 'application#index'
  get  'tasks',             to: 'tasks#index'
  post 'tasks',             to: 'tasks#create'
  get  'tasks/:id',         to: 'tasks#show'
  get  'tasks/:id/apply',   to: 'tasks#apply'
  post 'tasks/:id/destroy', to: 'tasks#destroy'
  devise_for :users
end
