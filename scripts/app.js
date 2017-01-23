/* Variables */
var map = new L.Map('map');
var osmbw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 16,
	minZoom: 11,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://github.com/2blam/HK-geojson/">HK GeoJSON</a>, <a href="http://www.census2011.gov.hk/en/district-profiles/tai-po.html">2011 Population Census</a>'
});
var geojson;
var info = L.control();

/* Functions */
/* Determine fill colour for area, used by style(feature) 
function getColour(population) {
	return population > 18000 ? '#f03b20' :
        	population > 16000 ? '#feb24c' :
           		    '#ffeda0' ;
}
*/

/* Determine style for area */
function style(feature) {
    return {
        //fillColor: getColour(feature.properties.POPULATION),
	fillColor: "#ffeda0",
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

/* mouseover function, used by onEachFeature */
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        fillColor: "#feb24c",
	weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
	
    info.update(layer.feature.properties);
}

/* mouseout function, used by onEachFeature */
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

/* on click zoom to function, used by onEachFeature */
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

/* assign event handlers, to be added at L.geoJson call */
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

/* create a div with a class "info" */
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); 
    this.update();
    return this._div;
};

/* method that we will use to update the control based on feature properties passed */
info.update = function (props) {
    this._div.innerHTML = '<h4>Tai Po District Population: 296,853</h4>' +  (props ?
        '<b>' + props.ENAME + ' (' + props.CACODE + ')</b><br />' + props.POPULATION
        : 'Hover over a beighbourhood');
};

/* START */
map.setView([22.451203, 114.169144], 14);
map.addLayer(osmbw);

map.on('click', function(e){
	console.log("Coordinate: " + e.latlng);
});

geojson = L.geoJson(neighbourhoods, {style: style, onEachFeature: onEachFeature}).addTo(map);

info.addTo(map);
