class Task < ActiveRecord::Base
  belongs_to :user
  has_many :responded, through: :user_task

  scope :by_city_if, -> (user_signed_in, current_user) { user_signed_in ? where(user: current_user) : self }
  scope :by, -> (user) { where(user: user) }
  scope :not, -> (user) { where.not(user: user) }
  scope :not_completed, -> { where(completed: 0) }
end
