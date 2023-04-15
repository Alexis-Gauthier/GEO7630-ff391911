// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

// création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
});
map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte

// création du contrôle de géolocalisation

var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

// création du contrôle d'échelle

var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// configuration d'un service de données WFS
var WFSConfig = [
    'wfs-test-source', {
        type: 'geojson',
        data: null
    }
]
// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout des sources et des couches de la carte
map.on('load', function () {
    // ajout de la source des garages
    map.addSource('garage-source', {
        type: 'vector', // type de source
        tiles: ['http://localhost:8801/geo7630.garage_labo_8/{z}/{x}/{y}.pbf'] // URL des tuiles vectorielles
    })
    // ajout de la couche des garages
    map.addLayer({
        'id': 'garage', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'garage-source', // source des données de la couche
        'source-layer': 'geo7630.garage_labo_8', // source des données de la couche, majoritairement nomduschema.nomdelatable
        'filter': ['==', ['get', 'operator_id'], 2]
    }) 
});

// gestion du clic sur la couche des garages
map.on('click', 'garage', function (e) {
    var coordinates = turf.centroid(e.features[0]) // calcul des coordonnées du centre de la géométrie cliquée
  // Fonction de map qui permet de se deplacer sur une coordonnees et un niveau de zoom
    map.jumpTo({
        center: coordinates.geometry.coordinates,
        zoom: 13
    });

    var description = e.features[0].properties.adresse; // récupération de l'adresse du garage cliqué

    // création d'une popup pour afficher l'adresse
    new maplibregl.Popup()
        .setLngLat(coordinates.geometry.coordinates) // position de la popup sur le centre de la géométrie cliquée
        .setHTML(description) // contenu HTML de la popup
        .addTo(map); // ajout de la popup à la carte
});

// Simple fonction qui filtre les garages sur la props operatorid id
function filterGarage() {
    map.setFilter('garage', ['>', ['get', 'operator_id'], 2]);
}

// Simple fonction qui filtre les garages sur la props operatorid id
function loadWFS() {
   // ajout de la source des garages
    map.addSource('bixi-source', {
        type: 'geojson', // type de source
        data: 'http://localhost:9000/collections/geo7630.analyse_bixi_par_station/items.json?limit=10000' // URL pg_featureserv geojson
    })
    // ajout de la couche des garages
    map.addLayer({
        'id': 'bixi', // identifiant de la couche
        'type': 'circle', // type de géométrie de la couche
        'source': 'bixi-source', // source des données de la couche
        'paint': {
            'circle-color': [
                'interpolate', // methode interpolation
                ['linear'], // type d'interpolation
                ['get', 'end_total_count'], // choisir props 
                100,
                'blue',
                300,
                'royalblue',
                600,
                'cyan',
                1000,
                'lime',
                2000,
                'yellow',
                3000,
                'red'
            ]
        }
    })
}

// Binding de l'événement et de la fonctionnalité
document
    .getElementById('filterGarage')
    .addEventListener('click', filterGarage);

// Binding de l'événement et de la fonctionnalité
document
    .getElementById('loadWFS')
    .addEventListener('click', loadWFS);

// Ajouter un curseur de click lorsque la souris se positionnement sur un feature du layer.
map.on('mouseenter', 'garage', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Ajouter un curseur de deplacement lorsque la souris se positionnement en dehors d'un feature du layer.
map.on('mouseleave', 'garage', function () {
    map.getCanvas().style.cursor = '';
});