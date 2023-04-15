function generateHeatmap() {
    
    removeAllLayersAndSources()

    map.addSource('heatmap-source', {
        type: 'geojson',
        data: randomPoints
    });
    map.addLayer({
        id: 'heatmap',
        source: 'heatmap-source',
        type: 'heatmap'
    });
}

document
  .getElementById('generateHeatmap')
  .addEventListener('click', generateHeatmap);
