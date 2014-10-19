class Task < ActiveRecord::Base
  belongs_to :user

  scope :by_city_if, -> (user_signed_in, current_user) { user_signed_in ? where(user: current_user) : self }
  scope :by, -> (user) { where(user: user) }
  scope :not, -> (user) { where.not(user: user) }
  scope :not_completed, -> { where(completed: 0) }

  validates :about, length: { minimum: 1, maximum: 255 }, presence: true
  validates :address, length: { minimum: 1, maximum: 255 }
  validates :lat, length: { maximum: 15 }
  validates :lng, length: { maximum: 15 }
  validates :date, date: { after: Proc.new { Time.now }, message: 'не может быть раньше текущего момента' }

  def get_date
    month = ['', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 
      'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    d = Time.zone.at(self.date)
    d.strftime(d.year > Time.now.year ? "%e #{month[d.month]} %Y в %H:%M" : "%e #{month[d.month]} в %H:%M")
  end
end
