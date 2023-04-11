
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.55, 45.55],
    zoom: 9
});

var WMSConfig = [
    'wms-test-source',
    {
        'type': 'raster',
        'tiles': [
            null
        ],
        'tileSize': 256,
        'scheme': 'tms'
    }]

var WFSConfig = [
    'wfs-test-source', {
        type: 'geojson',
        data: null
    }
]

var loadWFS = function () {

    const baseUrl = "http://localhost:8080/geoserver/geo7630/ows?"
    const serviceType = "service=WFS"
    const version = "version=1.0.0"
    const request = "request=GetFeature"
    const typeName = "typeName=geo7630:analyse_bixi_par_station"
    const outputFormat = "outputFormat=application/json"

    const WFSurl = baseUrl + '&' + serviceType + '&' + version + '&' + request + '&' + typeName + '&' + outputFormat

    WFSConfig[1].data = WFSurl
    map.addSource(WFSConfig[0], WFSConfig[1])
    map.addLayer({
        'id': 'geojson',
        'type': 'circle',
        'source': 'wfs-test-source',
        'paint': {
            'circle-color': 'red'
        }
    });
}

var loadWMS = function () {

    const baseUrl = 'http://localhost:8080/geoserver/geo7630/wms?'
    const serviceType = "SERVICE=WMS"
    const bbox = "BBOX={bbox-epsg-3857}"
    const request = "REQUEST=GetMap"
    const crs = "CRS=EPSG:3857"
    const tileSize = "WIDTH=256&HEIGHT=256"
    const layers = "LAYERS=geo7630:301-5040"
    const format = "&FORMAT=image/png"
    const option = "transparent=true"

    const wmsUrl = baseUrl + '&' + serviceType + '&' + bbox + '&' + request + '&' + crs + '&' + tileSize + '&' + layers + '&' + format + '&' + option

    WMSConfig[1].tiles = [wmsUrl]

    map.addSource(WMSConfig[0], WMSConfig[1])
    map.addLayer({
        'id': 'imagery',
        'type': 'raster',
        'source': 'wms-test-source'
    });
}

document
    .getElementById('loadWMS')
    .addEventListener('click', loadWMS);

document
    .getElementById('loadWFS')
    .addEventListener('click', loadWFS);