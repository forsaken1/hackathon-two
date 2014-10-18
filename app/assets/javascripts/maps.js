$(document).ready(function() {
  var myMap,
  getTaskData = function(task) {
    var date = new Date( task.date );
    return ('0' + date.getDate()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + '.' + date.getFullYear() + ', ' +
            ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  },
  initMainPageMap = function() {
    var link = '/tasks',
        wrapper_id = 'map_wrapper';
    if ($('#single_map_wrapper').length) {
      link = link + '/' + $('#task_id').val();
      wrapper_id = $('#single_map_wrapper').attr('id');
    }
    $.get(link, {}, function(data) {
      var myCollection = new ymaps.GeoObjectCollection();
      myMap = new ymaps.Map(wrapper_id, {
        center: [54.83, 37.11],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
      });
      if (data.result == 'ok') {
        if ('tasks' in data) {
          data.tasks.forEach(function(element, index) {
            var placemark = new ymaps.Placemark([element.lat, element.lng], {
              balloonContentHeader: element.about,
              balloonContentBody: 'Адрес: ' + element.address + '<br />Дата: ' + getTaskData(element) +
                '<br /><a href="/tasks/1" target="_blank">Подробнее</a>'
            });
            myCollection.add(placemark);
          });
        } else if ('task' in data) {
          var placemark = new ymaps.Placemark([data.task.lat, data.task.lng], {
            balloonContentHeader: data.task.about,
            balloonContentBody: 'Адрес: ' + data.task.address + '<br />Дата: ' + getTaskData(data.task)
          });
          myCollection.add(placemark);
        }
        myMap.geoObjects.add(myCollection);
        myMap.setBounds( myCollection.getBounds() );
      }
    });
  };
  ymaps.ready(initMainPageMap);
});