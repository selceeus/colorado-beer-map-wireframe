
//Mapping
const mapContainer = $('#map');

if( mapContainer.length > 0 ) {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VsY2VldXMiLCJhIjoiY2s0Mzh1NjFvMDJvcDNlbmFkejMyMHdjNyJ9.t-rxQRKpzYDBstSg-_QSUQ';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-105.358887, 39.113014],
        zoom: 7
      });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
                trackUserLocation: true,
                showUserLocation: true
        })
    );
      
}