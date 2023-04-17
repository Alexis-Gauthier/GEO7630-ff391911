map.on('load', function() {
  map.addSource('data_vol', {
    type: 'geojson',
    data: 'vol_dans_char_2023.geojson'
  });

  map.addLayer({
    id: 'points',
    type: 'circle',
    source: 'data_vol',
    paint: {
      'circle-radius': 6,
      'circle-color': '#B42222'
    },
    filter: ['==', '$type', 'Point']
  });

  map.addLayer({
    id: 'polygones',
    type: 'fill',
    source: 'data_vol',
    paint: {
      'fill-color': '#B42222',
      'fill-opacity': 0.5,
      'fill-outline-color': '#B42222'
    },
    filter: ['==', '$type', 'Polygon']
  });

  // On crée la fonction de chargement de fichier
  function chargerFichier(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      map.getSource('data_vol').setData(JSON.parse(text));
    };
    reader.readAsText(input.files[0]);
  }
  
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
});

// On lie le bouton de chargement de fichier à la fonction de chargement de fichier
document.getElementById('file').addEventListener('change', chargerFichier);

// On lie le bouton de zoom à la fonction de zoom sur les données
document.getElementById('zoomto').addEventListener('click', zoomerDonnees);

// On lie le bouton de colorisation à la fonction de colorisation des données
document.getElementById('colorier').addEventListener('click', colorierDonnees);
