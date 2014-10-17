class Task < ActiveRecord::Base
  belongs_to :user
  has_many :responded, through: :user_task

  scope :by_city_if, -> (user_signed_in) { user_signed_in ? where(user: current_user) : self }
end
