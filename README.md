Техническое задание для проекта на второй Владивостокский хакатон
==========

#### Примечания

Приняли решение отказатсья от fullREST и пользоваться только GET и POST запросами в связи с особенностями библиотеки Android.

## Исполнители

* Александр Готовец - web-frontend
* Андрей Недобыльский - mobile-frontend (https://github.com/jhonyxakep/hackathon_2)
* Алексей Крылов - backend

## Основная идея

Приложение для облегчения жизни пожилых людей, либо людей с ограниченными возможностями.
Человек, аутентифицированный на сервисе, будет иметь возможность попросить помощь у других людей, либо сам посмотреть список задач от других людей и по желанию откликнуться на просьбу о помощи. Человек, помогающий другим, не должен требовать платы за свою помощь, то есть он является волонтером.

Этот сервис решит две проблемы:

* Даст возможность молодым людям, которые хотят помочь нуждающимся, но не знают как, сделать доброе дело.
* Даст возможность нуждающимся просить о помощи большое количество людей, а также быстро получать необходимую помощь.

# Pеализация

Приложение должно состоять из трех частей:

* Серверная часть (backend)
* Web-frontend
* Mobile-frontend

## Требования

### Web-frontend (http://volonter-dv.herokuapp.com/)

* Регистрация и авторизация
* Возможность просмотра списков с просьбами
* Возможность просмотра карты с просьбами в выбранном городе
* Возможность создания просьбы с привязкой к географическим координатам

### Mobile-frontend (https://github.com/jhonyxakep/hackathon_2)

* Регистрация и авторизация
* Возможность просмотра самых ближайших к пользователю просьб
* Создание просьбы с шаблонами сообщений, без шаблона сообщения и просто по нажатию на кнопку с определенным шаблоном сообщения (экстренная просьба без указания времени)

### Серверная часть

* Реализация API для web и mobile frontend
* Деплой проекта на сервер
* Тестирование

## API

Актуальная версия доступна по ссылке: http://docs.hackathon4.apiary.io/

## Подробное описание интерфейса

### Web-frontend

* Для разработки интерфейса можно использовать популярный css-framework Bootstrap. Как альтернативу, можно использовать более симпатичный Semantic-UI.
* В качестве основного фреймворка можно использовать single-page-framework backbone.js, это даст некоторую общность с mobile-фронтэнд и упростит реализацию API. В ином случае можно использовать нативные для Rails средства разработки: шабонизаторы ERB или более удобный HAML, CSS или SASS, JS или CoffeeScript (все доступно в Rails практически "из коробки").
* Главная страница с картой текущего города (либо определенного автоматически через геопоиск) (yandex, 2gis, google или что другое по желанию программиста), на карте будут отображаться бакены (у yandex, например, есть Placemarks) с описанием с инициалами, текстом и временем просьбы.
* Страница с просьбами по текущему городу осортированная на сервере по дате.
* Страница подробного просмотра просьбы с картой.
* Форма создания просьбы с полями: 
  * адрес (без города, который определяется из настроек пользователя), можно даже карту сделать, где выбрать конкретную точку нахождения
  * время, когда требуется помощь, если не указано, то просьба считается "экстренной"
  * описание просьбы
  * (если не зарегистрирован) имя, фамилию, email, password, password_confirmation + флажок registration: true - сразу происходит регистрация и подача заявки
* (можно реализовать в конце разработки) Личный кабинет пользователя с изменением настроек
* (можно реализовать в конце разработки) Регистрация и авторизация стандартные, с логином через email. Авторизация с полями email - пароль, регистрация с полями: имя, фамилия, город, email, пароль, подтверждение пароля (все поля обязательны).
* (не обязательно) Раздел "Отзывы" с формой с одним textarea и кнопкой для отправки

### Mobile-frontend (https://github.com/jhonyxakep/hackathon_2)

* Главная страница с картой текущего города (либо определенного автоматически) с бакенами просьб.
* (эксклюзивная фича) Список ближайших к пользователю просьб.
* Подробный просмотр просьбы с картой (если возможно).
* Форма создания просьбы в стиле web-frontend.
* (эксклюзивная фича) Форма с "тревожной" кнопкой для подачи экстренной просьбы с шаблоном просьбы в стиле "Нужна помощь по адресу: бла-бла".
* (можно реализовать в конце разработки) Регистрация и авторизация в стиле web-frontend.
* (можно реализовать в конце разработки) Личный кабинет в стиле web-frontend.

### Backend

* API
* Тесты (папка /spec в корне проекта)
