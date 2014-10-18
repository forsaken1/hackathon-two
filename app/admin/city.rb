ActiveAdmin.register City do
  permit_params :name, :lat, :lng

  menu label: 'Города'

  index do
    selectable_column
    id_column
    column :name
    column :lat
    column :lng
    column :update_at
    column :created_at
    actions
  end

  filter :name
  filter :lat
  filter :lng
  filter :update_at
  filter :created_at
end