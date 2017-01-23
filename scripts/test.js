// Use StamenToner.Lite map tiles

var stl = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a> - Map data &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,  <a href="https://github.com/2blam/HK-geojson/" target="_blank">HK GeoJSON</a>, <a href="http://www.census2011.gov.hk/en/district-profiles/tai-po.html" target="_blank">2011 Population Census</a>',
	maxZoom: 16,
	minZoom: 11,
	ext: 'png'
});

map.addLayer(stl);
