city1 = City.create(name: 'Владивосток', lng: '131.8735300', lat: '43.1056200')
city2 = City.create(name: 'Уссурийск',   lng: '131.9457800', lat: '43.8029100')
city3 = City.create(name: 'Находка',     lng: '132.8734800', lat: '42.8138400')

user1 = User.create(name: 'Михаил', surname: 'Иванов', email: 'alexey2141@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)
user2 = User.create(name: 'Иван', surname: 'Михаилов', email: 'alexey2143@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)
user3 = User.create(name: 'Марфа', surname: 'Васильевна', email: 'alexey2144@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)
user4 = User.create(name: 'Николай', surname: 'Андреевич', email: 'alexey2142@mail.ru', password: '12345678', password_confirmation: '12345678', city: city1)

task1 = Task.create(about: 'Достать котенка с дерева', date: Time.now + 1.day, address: 'Октябрьская, 27', 
  lng: '131.886886', lat: '43.125522', user: user1)
task2 = Task.create(about: 'Передвинуть диван', date: Time.now + 2.day, address: 'Алеутская, 15', 
  lng: '131.881181', lat: '43.213969', user: user3)
task3 = Task.create(about: 'Отпилить ветку у соседнего с домом дерева', date: Time.now + 3.day, address: 'Октябрьская, 27', 
  lng: '131.886886', lat: '43.125522', user: user1)
task4 = Task.create(about: 'Сходить за покупками', date: Time.now + 16.hours, address: 'Алеутская, 15', 
  lng: '131.881181', lat: '43.213969', user: user3)

UserTask.create(user: user2, task: task1)
UserTask.create(user: user2, task: task2)