Laboratoire 8 - GEO 7630

Webmapping avancé


Ajouter une couche de tuiles vectorielles (pg_tileserv)	2
Ajouter une couche WFS (pg_featureserv)	3
Contrôle de carte	4
Filtrer	6
Événement souris	6
Popup	6
JumpTo	8
Jump to a series of locations | MapLibre GL JS Docs	8







Charger les données geojson dans la BD

- sudo docker compose up -d
- valider que tous les containers roulent dans la baleine
- charger les données avec les 2 commandes suivantes
    
    docker compose run --rm ogr ogr2ogr -f PostgreSQL -lco GEOMETRY_NAME=geom -lco FID=gid -lco SPATIAL_INDEX=GIST -nlt PROMOTE_TO_MULTI  -nln geo7630.analyse_bixi_par_station  -t_srs EPSG:3857  -overwrite PG:"dbname='geo7630' host='172.19.0.1' port='8434' user='admin_geo' password='password'"  ./data/geo7630.analyse_bixi_par_station.geojson

    docker compose run --rm ogr ogr2ogr -f PostgreSQL -lco GEOMETRY_NAME=geom -lco FID=gid -lco SPATIAL_INDEX=GIST -nlt PROMOTE_TO_MULTI  -nln geo7630.garage_lab_8  -t_srs EPSG:3857  -overwrite PG:"dbname='geo7630' host='172.19.0.1' port='8434' user='admin_geo' password='password'"  ./data/garage.geojson

Ajouter une couche de tuiles vectorielles (pg_tileserv)
// ajout des sources et des couches de la carte
map.on('load', function () {
    // ajout de la source des garages
    map.addSource('garage-source', {
        type: 'vector', // type de source
        tiles: ['http://localhost:8801/geo7630.garage_labo_8/{z}/{x}/{y}.pbf'] // URL des tuiles vectorielles
    })
    // ajout de la couche des garages avec filtre
    map.addLayer({
        'id': 'garage', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'garage-source', // source des données de la couche
        'source-layer': 'geo7630.garage_labo_8', // source des données de la couche, majoritairement nomduschema.nomdelatable
    })
});


Ajouter une couche WFS (pg_featureserv)
// Simple fonction qui ajoute une couche WFS depuis pgFeatureServ
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


Contrôle de carte

Markers and controls | MapLibre GL JS Docs

Ajoutez un contrôle de Navigation
Ajoutez un contrôle de Géolocalisation
Ajoutez un contrôle d’échelle




    var nav = new maplibregl.NavigationControl({
        showCompass:true,
        showZoom:true,
        visualizePitch:true
    });
    map.addControl(nav,'top-right');
   
    var geolocateControl =new maplibregl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
   
    map.addControl(geolocateControl,'bottom-right');
   
    var scale = new maplibregl.ScaleControl({
        unit: 'metric'
        });
           
    map.addControl(scale);


Filtrer
Statiquement à la source
Map | MapLibre GL JS Docs propriété filter

    map.addLayer({
        'id': 'garage', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'garage-source', // source des données de la couche
        'source-layer': 'geo7630.garage_labo_8', // source des données de la couche, majoritairement nomduschema.nomdelatable
        'filter': ['==', ['get', 'operator_id'], 2]
    })


Dynamiquement avec un bouton
Map | MapLibre GL JS Docs

function filterGarage() {
map.setFilter('garage', ['>', ['get', 'operator_id'], 2]);
}

Événement souris
Display a popup on click | MapLibre GL JS Docs

Ajouter la librairie TURFJS dans le fichier app.HTML pour avoir accès aux fonctions TurfsJS pour calculer le centroide d’un polygone


 <script src="https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js"></script>



map.on('click', 'garage', function (e) {
    var coordinates = turf.centroid(e.features[0]) // calcul des coordonnées du centre de la géométrie cliquée
    console.log(coordinates)	
});

Popup
Display a popup on click | MapLibre GL JS Docs

Ajoutez dans une variable le texte à montrer dans la popup
Puis instanciez un nouveau maplibrePopUp() avec les propriétés
de setLngLat
de setHTML
et ajoutez le à la carte


map.on('click', 'garage', function (e) {
    var coordinates = turf.centroid(e.features[0]) // calcul des coordonnées du centre de la géométrie cliquée


    var description = e.features[0].properties.adresse; // récupération de l'adresse du garage cliqué


    // création d'une popup pour afficher l'adresse
    new maplibregl.Popup()
        .setLngLat(coordinates.geometry.coordinates) // position de la popup sur le centre de la géométrie cliquée
        .setHTML(description) // contenu HTML de la popup
        .addTo(map); // ajout de la popup à la carte
});
JumpTo
	Jump to a series of locations | MapLibre GL JS Docs

Dans la fonction map.onClick() ajouter : 

    // Fonction de map qui permet de se deplacer sur une coordonnees et un niveau de zoom
    map.jumpTo({
        center: coordinates.geometry.coordinates,
        zoom: 13
    });



