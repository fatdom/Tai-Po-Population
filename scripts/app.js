var map = new L.Map('map');

var osmbw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

map.setView([22.451203, 114.169144], 8);
map.addLayer(osmbw);
