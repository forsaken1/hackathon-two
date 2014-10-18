class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :city
  has_many :tasks
  has_many :user_tasks
  has_many :responded, through: :user_tasks, source: :task
end
