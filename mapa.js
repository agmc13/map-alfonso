function mapa(){
var map = L.map('map').setView([37.176149, -3.601481], 688);


var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


var catastroBase = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Dirección General de Catastro</a>',
    maxZoom: 20
});


var punto = L.marker([37.176118, -3.601649], {draggable: true}).addTo(map);

punto.addTo(map);

var baseMaps = {
    "OSM": osmBase,
    "Catastro": catastroBase
};

var overlayMaps = {
    "Puntazo": punto
};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: false // true
}).addTo(map);
}