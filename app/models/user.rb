class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :city
  has_many :tasks
  has_many :user_tasks
  has_many :responded, through: :user_tasks, source: :task

  validates :name, length: { maximum: 255 }
  validates :surname, length: { maximum: 255 }
  validates :city_id, numericality: { only_integer: true }
  has_attached_file :avatar, :styles => { :medium => "300x300#", :thumb => "100x100#" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
