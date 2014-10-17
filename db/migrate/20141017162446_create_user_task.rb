class CreateUserTask < ActiveRecord::Migration
  def change
    create_table :user_task do |t|
      t.belongs_to :user
      t.belongs_to :task
      t.timestamps
    end
    add_index :user_task, [:user_id, :task_id]
  end
end
