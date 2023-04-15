function generate3D(){
    console.log('test')
    removeAllLayersAndSources()
    var grid = makeGrid()
    console.log(grid)

    map.addSource('3d-source', {
        type: 'geojson',
        data: grid
    });
    map.addLayer({
        'id': '3dgrip',
        'source': '3d-source',
        'type': 'fill-extrusion',
        'paint': {
            'fill-extrusion-color': [
                'interpolate', ['linear'], ['get', 'randomValue'],
                0, '#f3e79b',
                30, '#fac484',
                50, '#eb7f86',
                80, '#ce6693',
                100, '#a059a0'
            ],
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['get', 'randomValue'],
                0, 100,
                100, 4000
            ],
            'fill-extrusion-opacity': 0.6
        }
    });
}

document
  .getElementById('generate3D')
  .addEventListener('click', generate3D);
