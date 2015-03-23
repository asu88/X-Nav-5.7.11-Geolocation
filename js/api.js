

var map = L.map('map').setView([40.2838, -3.8215], 13);


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

L.marker([40.2838, -3.8215]).addTo(map)
    .bindPopup(' Universidad Rey Juan Carlos, Aulario III')
    .openPopup(); 


var popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng).setContent("Coordenadas " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
