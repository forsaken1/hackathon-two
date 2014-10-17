city1 = City.create(name: 'Владивосток', lng: '131.8735300', lat: '43.1056200')
city2 = City.create(name: 'Уссурийск',   lng: '131.9457800', lat: '43.8029100')
city3 = City.create(name: 'Находка',     lng: '132.8734800', lat: '42.8138400')

user1 = User.create(email: 'alexey2141@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)
user2 = User.create(email: 'alexey2143@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)

task1 = Task.create(about: 'Достать котенка с дерева', date: '2014-10-22 10:00:00', address: 'Октябрьская, 27', 
  lng: '131.886886', lat: '43.125522', user: user1)
task2 = Task.create(about: 'Передвинуть диван', date: '2014-10-20 12:00:00', address: 'Алеутская, 15', 
  lng: '131.881181', lat: '43.213969', user: user1)

UserTask.create(user: user2, task: task1)
UserTask.create(user: user2, task: task2)