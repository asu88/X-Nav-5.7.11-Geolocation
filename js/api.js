/*
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.MapQuest({layer: 'sat'})
      })
    ],
    view: new ol.View({
      center: ol.proj.transform([40.2838, -3.8215], 'EPSG:4326', 'EPSG:3857'),
      zoom: 6
    })
  }); */


/*.setView([40.2838, -3.8215], 13); */

 if (navigator.geolocation) {
        var map = L.map('map');
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',      
             maxZoom: 18
        }).addTo(map);


        map.locate({setView: true, maxZoom: 16});

        function onLocationFound(e) {

            var radius = e.accuracy / 2;


            L.marker(e.latlng).addTo(map)
                .bindPopup("Tu ubicación actual es esta, con una precisión de " + radius + " metros ").openPopup();

            L.circle(e.latlng, radius).addTo(map);
        }

        map.on('locationfound', onLocationFound); 

 } else {
           var x = document.getElementById("map");
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    


