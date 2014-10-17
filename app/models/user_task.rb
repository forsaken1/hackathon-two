class UserTask < ActiveRecord::Base
  self.table_name = 'user_task'
  belongs_to :user
  belongs_to :task
end