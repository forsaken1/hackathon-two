$(document).ready(function() {
  var myMap, myPlacemark, coords = [43.1200, 131.8900],
  getTaskData = function(task) {
    var date = new Date( task.date );
    return ('0' + date.getDate()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + '.' + date.getFullYear() + ', ' +
            ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  },
  saveCoordinats = function() {
    $('#new_task_lat').val( coords[0].toFixed(4) );
    $('#new_task_lng').val( coords[1].toFixed(4) );
  },
  initNewTaskMap = function() {
    myMap = new ymaps.Map('new_task_map', {
      center: coords,
      zoom: 12,
      controls: ['zoomControl', 'typeSelector']
    });
    myPlacemark = new ymaps.Placemark( coords, {}, { preset: "twirl#redIcon", draggable: true } );
    myMap.geoObjects.add(myPlacemark);
    saveCoordinats();

    myPlacemark.events.add("dragend", function (e) {      
      coords = this.geometry.getCoordinates();
      saveCoordinats();
    }, myPlacemark);

    myMap.events.add('click', function (e) {        
      coords = e.get('coordPosition');
      saveCoordinats();
    });
  },
  initMainPageMap = function() {
    if ($('#new_task_map').length) {
      initNewTaskMap();
      return;
    }
    var link = '/tasks',
        wrapper_id = 'map_wrapper';
    if ($('#single_map_wrapper').length) {
      link = link + '/' + $('#task_id').val();
      wrapper_id = $('#single_map_wrapper').attr('id');
    }
    if ($('#map_wrapper').length) {
      $('#map_wrapper').height( $(window).height() - ( $('.main_menu').height() + $('FOOTER').height() + 30 ) );
    }
    $.get(link, {}, function(data) {
      var myCollection = new ymaps.GeoObjectCollection();
      myMap = new ymaps.Map(wrapper_id, {
        center: coords,
        zoom: 12,
        controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
      });
      if (data.result == 'ok') {
        if ('tasks' in data && data.tasks.length > 0) {
          data.tasks.forEach(function(element, index) {
            var placemark = new ymaps.Placemark([element.lat, element.lng], {
              balloonContentHeader: element.about,
              balloonContentBody: 'Контакты: ' + element.address + '<br />Дата: ' + getTaskData(element) +
                '<br /><a href="/tasks/' + element.id + '">Подробнее</a>'
            });
            myCollection.add(placemark);
          });
          myMap.geoObjects.add( myCollection );
          myMap.setBounds( myCollection.getBounds() );
        } else if ('task' in data) {
          var placemark = new ymaps.Placemark([data.task.lat, data.task.lng], {
            balloonContentHeader: data.task.about,
            balloonContentBody: 'Адрес: ' + data.task.address + '<br />Дата: ' + getTaskData(data.task)
          });
          myCollection.add( placemark );
          myMap.geoObjects.add( myCollection );
          myMap.setBounds( myCollection.getBounds() );
          myMap.setZoom(12);
        }
      }
    });
  };
  ymaps.ready(initMainPageMap);
});