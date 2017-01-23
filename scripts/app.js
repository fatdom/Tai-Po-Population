function getColour(population) {
	return population > 18000 ? '#f03b20' :
        	population > 16000 ? '#feb24c' :
           		    '#ffeda0' ;
}

function style(feature) {
    return {
        fillColor: getColour(feature.properties.POPULATION),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
	
var map = new L.Map('map');

var osmbw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 16,
	minZoom: 11,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://github.com/2blam/HK-geojson/">HK GeoJSON</a>, <a href="http://www.census2011.gov.hk/en/district-profiles/tai-po.html">2011 Population Census</a>'
});

map.setView([22.451203, 114.169144], 14);
map.addLayer(osmbw);

map.on('click', function(e){
	console.log("Coordinate: " + e.latlng);
});

L.geoJson(neighbourhoods, {style: style}).addTo(map);


