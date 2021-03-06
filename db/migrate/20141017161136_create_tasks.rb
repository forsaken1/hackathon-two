class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :about
      t.string :address
      t.string :lat, length: 15
      t.string :lng, length: 15
      t.integer :completed, default: 0
      t.datetime :date, default: nil
      t.belongs_to :user
      t.timestamps
    end
    add_index :tasks, :about, unique: true
  end
end
