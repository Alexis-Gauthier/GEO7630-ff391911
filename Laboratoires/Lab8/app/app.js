// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

// création du contrôle de navigation

// création du contrôle de géolocalisation

// création du contrôle d'échelle

// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout des sources et des couches de la carte
map.on('load', function () {
    // ajout de la source des garages
   
});

// gestion du clic sur la couche des garages
map.on('click', 'garage', function (e) {
    var coordinates = turf.centroid(e.features[0]) // calcul des coordonnées du centre de la géométrie cliquée

});

// Simple fonction qui filtre les garages sur la props operatorid id


// Simple fonction qui filtre les garages sur la props operatorid id
function loadWFS() {
   
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