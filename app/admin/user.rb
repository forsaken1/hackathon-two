ActiveAdmin.register User do
  permit_params :name, :surname, :email, :city

  menu label: 'Пользователи'

  index do
    selectable_column
    id_column
    column :name
    column :surname
    column :email
    column :city
    column :last_sign_in_at
    column :update_at
    column :created_at
    actions
  end

  filter :name
  filter :surname
  filter :email
  filter :city
  filter :last_sign_in_at
  filter :update_at
  filter :created_at
end