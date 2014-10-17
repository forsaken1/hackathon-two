class Task < ActiveRecord::Base
  belongs_to :user
  has_many :responded, through: :user_task
end
