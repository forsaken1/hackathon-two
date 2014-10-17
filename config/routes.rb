Rails.application.routes.draw do
  root 'application#index'
  get  'tasks',             to: 'tasks#index'
  get  'tasks/:id',         to: 'tasks#show'
  get  'tasks/:id/apply',   to: 'tasks#apply'
  post 'tasks',             to: 'tasks#create'
  post 'tasks/:id/delete',  to: 'tasks#delete'
  devise_for :users
end
