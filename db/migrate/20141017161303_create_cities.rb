class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :lat, length: 15
      t.string :lng, length: 15
      t.timestamps
    end
    add_index :cities, :name, unique: true
  end
end
