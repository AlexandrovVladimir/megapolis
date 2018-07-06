if(document.getElementById('home-map') !== null){
    var yandexMap;

    ymaps.ready(function(){
        var mapData = document.getElementById('home-map').getAttribute('data-address'),
            getPos = mapData.split(' '),
            baloon = new ymaps.Placemark([getPos[1], getPos[0]], {}, {});

        yandexMap = new ymaps.Map('home-map', {
            behaviors: ['default', ''],
            center: [getPos[1], getPos[0]],
            zoom: 17.5,
        });

        yandexMap.controls.add(
            new ymaps.control.ZoomControl()
        );

        yandexMap.geoObjects.add(baloon);
    });
}