// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

const myLayers = ['grid', 'buffer', 'rdp', 'union', 'joined']

// Cette fonction est appelée lorsque la carte est chargée.
map.on('load', function () {
    // Charge une couche de points aléatoires.
    loadRandomPointsLayer()
    // Ajoute un contrôle de légende personnalisé.
    map.addControl(new MaplibreLegendControl({ 
        rdp: "rdp", 
        grid: 'grid',
        union: 'union',
        buffer: 'buffer',
        joined: 'joined'
    }, { onlyRendered: true }), "bottom-left");
});

// Cette fonction est appelée lorsque la carte est en attente.
map.on('idle', function () {
    // Récupère les couches de style de la carte.
    const layers = map.getStyle().layers;
    // Parcourt toutes les couches.
    layers.forEach((layer) => {
        // Si la couche est 'joined', met à jour le compteur dynamique.
        if (layer.id == 'joined') {
            dynamicCount()
        // Sinon, si la couche est 'rdp', met à jour le compteur de fonctionnalités.
        } else if (layer.id == 'rdp') {
            featureCount()
        }        
    });
});
