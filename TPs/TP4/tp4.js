mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGlzLWdhdXRoaWVyIiwiYSI6ImNsZ2xoOGFqaDAzenozaG1lMXYybHkwbzMifQ.pT4pVZwsoYraglgAT3YLrg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.5673, 45.5017],
  zoom: 12
});

map.on("load", () => {
  // This code runs once the base style has finished loading.

  map.addSource("vol_data", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/vol_dans_char_2023/FeatureServer/0/query?f=pgeojson&where=1=1",
  });

  map.addLayer({
    id: "vol_data_cercles",
    type: "circle",
    source: "vol_data",
  });

  map.addLayer({
    id: "vol_data_cluster_count",
    type: "symbol",
    source: "vol_data",
    layout: {
      "text-font": ["Arial Bold"],
      "text-field": ["get", "point_count"],
      "text-offset": [0, 0.1] // move the label vertically downwards slightly to improve centering
    },
    paint: {
      "text-color": "white"
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

