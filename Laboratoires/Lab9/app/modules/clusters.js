function generateClusters() {
    
    removeAllLayersAndSources()

    map.addSource('clusters-source', {
        type: 'geojson',
        data: randomPoints,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
    
    map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'clusters-source',
        filter: ['has', 'point_count'],
        paint: {
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                5,
                '#f1f075',
                10,
                '#f28cb1'
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                20,
                40,
                40,
                60
                ]
            }                
    });
    
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'clusters-source',
        filter: ['has', 'point_count'],
        layout: {
            'text-field':
             '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
        }
    });
    
    map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'clusters-source',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
        }
    });
}

document
  .getElementById('generateClusters')
  .addEventListener('click', generateClusters);