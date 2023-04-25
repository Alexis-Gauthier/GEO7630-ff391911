mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGlzLWdhdXRoaWVyIiwiYSI6ImNsZ2xoOGFqaDAzenozaG1lMXYybHkwbzMifQ.pT4pVZwsoYraglgAT3YLrg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.5673, 45.515],
  zoom: 12.5
});

map.on("load", () => {
  // This code runs once the base style has finished loading.

  map.addSource("limites", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limite_ville_marie/FeatureServer/0/query?f=pgeojson&where=1=1",
  });

  map.addLayer({
    id: "limites_line",
    type: "line",
    source: "limites",
  });
    
  
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
        '#710000',
        100,
        '#610000'
    ],
    'circle-radius': [
        'step',
        ['get', 'point_count'],
        2,
        2,
        8,
        5,
        12,
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
          'text-size': [
            'case',
              ['>=', ['get', 'point_count'], 50],  // Si le point_count est supérieur ou égal à 50
              25,                                  // Utiliser une taille de police de 25
              17                                   // Sinon, utiliser une taille de police de 17
            ]
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

    // inspect a cluster on click
    map.on('click', 'clusters', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters']
        });
        var clusterId = features[0].properties.cluster_id;
        map.getSource('vol_data').getClusterExpansionZoom(
            clusterId,
            function (err, zoom) {
                if (err) return;
                
                map.easeTo({
                    center: features[0].geometry.coordinates,
                    zoom: zoom
                });
           }
       );
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

  document.getElementById("a-propos").addEventListener("click", popup);

  function popup() {
    alert("Cette carte permet de visualiser où se concentre les vols dans (ou sur) véhicules à moteur dans l'arrondissement Ville-Marie depuis 2023. \n\nVous pouvez zoomer sur les données en cliquant tout simplement sur les cercles rouges. \n\nVous pouvez colorier les données en cliquant sur le bouton 'Colorier les données'. \n\nVous pouvez cliquer sur les points de données pour voir le nombre de points de collecte dans un secteur. \n\nVous pouvez cliquer sur le bouton 'Sources des données' afin d'être rediriger vers le site des données ouvertes de la Ville de Montréal \n\nCette carte a été créé dans la cadre du cours GEO7630 - Intégration et visualisation de données géographiques. \n\nElle a été réalisée par Alexandre-Raphaël Gauthier, étudiant au baccalauréat de géographie à l'Université du Québec à Montréal");
  }


// On lie le bouton de zoom à la fonction de zoom sur les données
document.getElementById('zoomto').addEventListener('click', zoomerDonnees);

