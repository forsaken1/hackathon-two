ActiveAdmin.register Task do
  permit_params :about, :address, :user, :completed, :date

  menu label: 'Просьбы'

  index do
    selectable_column
    id_column
    column :about
    column :address
    column :user
    column :completed
    column :date
    column :update_at
    column :created_at
    actions
  end

  filter :about
  filter :address
  filter :user
  filter :completed
  filter :date
  filter :update_at
  filter :created_at
end