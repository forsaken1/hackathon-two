$(document).ready(function() {
  var myMap,
  initMainPageMap = function() {
    $.get('/tasks', {}, function(data) {
      var myCollection = new ymaps.GeoObjectCollection();
      myMap = new ymaps.Map('map_wrapper', {
        center: [54.83, 37.11],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
      });
      var coordinatesList = [];
      data.tasks.forEach(function(element, index) {
        var date = new Date( element.date );
        var dateStr = ('0' + date.getDate()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + '.' + date.getFullYear() + ', ' +
                      ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
        coordinatesList[ index ] = [element.lat, element.lng];
        var placemark = new ymaps.Placemark([element.lat, element.lng], {
          balloonContentHeader: element.about,
          balloonContentBody: 'Адрес: ' + element.address + '<br />Дата: ' + dateStr +
            '<br /><a href="/tasks/1" target="_blank">Подробнее</a>'
        });
        myCollection.add(placemark);
      });
      myMap.geoObjects.add(myCollection);
      myMap.setBounds( myCollection.getBounds() );
    });
  };
  ymaps.ready(initMainPageMap);
});