// Ici on ajouter le 'accesToken' qui nous permet d'utiliser les cartes de Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGlzLWdhdXRoaWVyIiwiYSI6ImNsZ2xoOGFqaDAzenozaG1lMXYybHkwbzMifQ.pT4pVZwsoYraglgAT3YLrg';
var map = new mapboxgl.Map({
  // On défénit l'ID de la div qui contiendra la carte comme étant 'map'
  container: 'map',
  // On défénit le style de la carte comme étant 'mapbox://styles/mapbox/streets-v11'
  style: 'mapbox://styles/mapbox/streets-v11',
  // On défénit le centre de la carte comme étant Montréal
  center: [-73.5673, 45.515],
  // On défénit le niveau de zoom initial de la carte, soit zoom 12
  zoom: 12
});

map.on("load", () => {
  // Ce code s'exécute une fois que le chargement du style de base est terminé.

  // On ajoute une source de données de type 'geojson' qui contient les données des limites de la Ville de Montréal
  map.addSource("limites", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limite_ville_marie/FeatureServer/0/query?f=pgeojson&where=1=1",
  });

  // On ajoute la couche des limites de l'arrondissement Ville-Marie et on la défini comme étant une ligne
  map.addLayer({
    id: "limites_line",
    type: "line",
    source: "limites",
  });
    
  // On ajoute une source de données de type 'geojson' qui contient les données de crimes de la Ville de Montréal
  // On crée des clusters pour les crimes dans un rayon rapproché de 50 pixels
  map.addSource("vol_data", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/2023_point_count/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 20, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

  // On ajoute la couche des crimes et on la défini comme étant un cercle
    map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: "vol_data",
    filter: ['has', 'point_count'],
paint: {
    // Expression en escalier
    // with three steps to implement three types of circles:
    //   Couleur '#000000' pour les cercles uniques
    //   Couleur '#da9999' et cercle de 8px pour les clusters ­>= 2 points
    //   Couleur '#c76666' et cercle de 12px pour les clusters ­>= 5 points
    //   Couleur '#B53232' et cercle de 17px pour les clusters ­>= 10 points
    //   Couleur '#920000' et cercle de 20px pour les clusters ­>= 25 points
    //   Couleur '#710000' et cercle de 30px pour les clusters ­>= 50 points
    //   Couleur '#610000' et cercle de 40px pour les clusters ­>= 100 points
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
      // Ajout d'un contour noir de 2px à chaque cluster
      'circle-stroke-width': 2,
      'circle-stroke-color': '#300000'
    },

  });

    // On ajoute le nombre de vols par cluster en définissant la taille de la police en fonction du nombre de vols en suivant les mêmes règles que pour la couleur et la grosseur des cercles
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
 
    // On ajoute les cercles uniques pour les vols qui ne sont pas dans un cluster en leur donnant un cercle d'uun rayon de 4px et un contour noir de 2px
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

    // Permet d'agrandir la carte au niveau du cluster sélectionné
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

  // 2.5D à travailler, ne s'saffiche pas (manque peut-être """map.on('load', function () { )
  map.addLayer(
    {
    'id': '3d-buildings',
    'source': 'https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/batiment_elevation_json/FeatureServer0/query?f=pgeojson&where=1=1&outFields=*',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',
     
    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );

});

  // Ajout d'un bouton clicable pour donner de l'information sur la carte
    document.getElementById("a-propos").addEventListener("click", popup);

    function popup() {
      alert("Cette carte permet de visualiser où se concentre les vols dans (ou sur) véhicules à moteur dans l'arrondissement Ville-Marie depuis 2023. \n\nVous pouvez zoomer sur les données en cliquant tout simplement sur les cercles rouges. \n\nVous pouvez colorier les données en cliquant sur le bouton 'Colorier les données'. \n\nVous pouvez cliquer sur les points de données pour voir le nombre de points de collecte dans un secteur. \n\nVous pouvez cliquer sur le bouton 'Sources des données' afin d'être rediriger vers le site des données ouvertes de la Ville de Montréal \n\nCette carte a été créé dans la cadre du cours GEO7630 - Intégration et visualisation de données géographiques. \n\nElle a été réalisée par Alexandre-Raphaël Gauthier, étudiant au baccalauréat de géographie à l'Université du Québec à Montréal");
    }


  // Créer un élément pour afficher la jauge
  var gaugeElement = document.createElement("div");
  gaugeElement.setAttribute("point_count", "vol_data");
  document.body.appendChild(gaugeElement);


  // Fonction pour mettre à jour la jauge
  function updateGauge() {
    // Récupérer les limites de la carte
    var bounds = map.getBounds();

    // Compter le nombre de points visibles dans les limites de la carte
    var visiblePoints = 0;
    vol_data.forEach(function(point) {
      if (bounds.contains([point.lat, point.lng])) {
        visiblePoints++;
      }
    });

    // Mettre à jour la jauge
    gaugeElement.innerHTML = "Points visibles: " + visiblePoints;
    document.getElementById("vol_data").innerHTML = visiblePoints;

  }

  // Appeler la fonction updateGauge à chaque fois que la carte est déplacée ou zoomée
  map.on("moveend zoomend", updateGauge);


