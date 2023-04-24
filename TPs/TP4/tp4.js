mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGlzLWdhdXRoaWVyIiwiYSI6ImNsZ2xoOGFqaDAzenozaG1lMXYybHkwbzMifQ.pT4pVZwsoYraglgAT3YLrg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.5673, 45.515],
  zoom: 12.5
});

map.on("load", () => {
  // This code runs once the base style has finished loading.

  map.addSource("vol_data", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/2023_point_count/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

    map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: "vol_data",
    filter: ['has', 'point_count'],
paint: {
    // Use step expressions (https://maplibre.org/maplibre-style-spec/#expressions-step)
    // with three steps to implement three types of circles:
    //   * Blue, 20px circles when point count is less than 100
    //   * Yellow, 30px circles when point count is between 100 and 750
    //   * Pink, 40px circles when point count is greater than or equal to 750
    'circle-color': [
        'step',
        ['get', 'point_count'],
        '#000000',
        2,
        '#da9999',
        5,
        '#c76666',
        10,
        '#B53232',
        25,
        '#920000',
        50,
        '#610000',
        100,
        '#300000'
    ],
    'circle-radius': [
        'step',
        ['get', 'point_count'],
        2,
        2,
        8,
        5,
        13,
        10,
        17,
        25,
        20,
        50,
        30,
        100,
        40
      ],
      'circle-stroke-width': 2,
      'circle-stroke-color': '#300000'
    },

  });

  map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'vol_data',
      filter: ['has', 'point_count'],
      layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
       }
    });
  
    map.addLayer({
      id: 'unclustered-point',
      type: 'circle',
      source: 'vol_data',
      filter: ['!', ['has', 'point_count']],
      paint: {
          'circle-color': '#eccccc',
          'circle-radius': 4,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#300000'
         }
    });

  map.addSource("limites", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limite_ville_marie/FeatureServer/0/query?f=pgeojson&where=1=1",
  });

  map.addLayer({
    id: "limites_line",
    type: "line",
    source: "limites",
  });

});

      
  // On crée la fonction de zoom sur les données
  function zoomerDonnees() {
    var features = map.querySourceFeatures('data_vol', { sourceLayer: 'polygones' });
    var bounds = features.reduce(function(bounds, feature) {
      return bounds.extend(turf.bbox(feature));
    }, new mapboxgl.LngLatBounds());
    map.fitBounds(bounds, { padding: 20 });
  }
  
  // On crée la fonction de colorisation des données
  function colorierDonnees() {
    var layer = map.getLayer('polygones');
    var colors = ['#ffeda0', '#feb24c', '#f03b20'];
    var stops = colors.map(function(color, i) {
      return [i + 1, color];
    });
    map.setPaintProperty(layer.id, 'fill-color', {
      property: 'niveau',
      stops: stops
    });
  }




// On lie le bouton de zoom à la fonction de zoom sur les données
document.getElementById('zoomto').addEventListener('click', zoomerDonnees);

