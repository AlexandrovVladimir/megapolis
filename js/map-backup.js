/*single baloon map*/
function singleBaloonMap(){
    var MY_MAPTYPE_ID = 'custom_style';
    function initialize(){
        var featureOpts = [{
            "stylers": []
        }];

        var geo = new google.maps.Geocoder();

        var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.SATELLITE, MY_MAPTYPE_ID],
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            panControl: false,
            panControlOptions: false,
            zoomControl: true,
            zoomControlOptions: false,
            mapTypeId: MY_MAPTYPE_ID
        };

        var map = new google.maps.Map(document.querySelector('#home-map'), mapOptions);

        var styledMapOptions = {
            name: 'Карта'
        };

        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
        
        geo.geocode({'address':'Москва: 127006, г. Москва, Романов пер. 3с7, стр.6'},function(results,status){
            if(status === google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
                var marker1 = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            }else{
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    var mapSingleCont=document.querySelector('#home-map');

    if(mapSingleCont!==null&&mapSingleCont!==undefined){
        google.maps.event.addDomListener(window, 'load', initialize);
    }
}

/*start maps*/
singleBaloonMap();