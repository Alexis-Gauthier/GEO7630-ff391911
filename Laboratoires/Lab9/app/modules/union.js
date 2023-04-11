/**
 * Cette fonction prend en entrée une FeatureCollection
 * et renvoie une Feature qui représente la fusion de toutes les Features dans la collection
 * Elle utilise la fonction Turf.js "dissolve" pour dissoudre les limites entre les features adjacentes.
 * @param {FeatureCollection} featureCollection - un set de points surlesquels on travaille
 * @returns {FeatureCollection} Une featureCollection de polygone dissous
 */
function unionFeatures(featureCollection) {
    const mergedFeature = turf.dissolve(featureCollection);
    return mergedFeature;
}

/**
Cette fonction gère les trois différentes options de l'interface utilisateur
en fonction de l'option sélectionnée.
Si la première option est sélectionnée, elle calcule et affiche l'union des cercles générés aléatoirement.
Si la deuxième option est sélectionnée, elle calcule et affiche une grille hexagonale.
Si la troisième option est sélectionnée, elle calcule et affiche une jointure spatiale entre les points générés aléatoirement et la grille hexagonale.
*/
function union() {
    // Vérifier si l'option d'union a été sélectionnée
    if (document.getElementById('inputGroupSelect03').value == 1) {
        // Récupérer le rayon sélectionné par l'utilisateur
        const radiusInput = document.getElementById('radiusInput').value
        // Créer un buffer pour chaque point généré aléatoirement
        const buffers = createBuffer(randomPoints, radiusInput)
        // Fusionner les buffers créés
        const unionized = unionFeatures(buffers)
        // Ajouter les données fusionnées à la carte
        map.addSource('union-source', {
            type: "geojson",
            data: unionized
        })
        // Ajouter la couche à la carte
        map.addLayer({
            id: 'union',
            type: 'fill',
            source: 'union-source',
            paint: {
                'fill-color': 'orange',
                'fill-opacity': 0.5
            }
        })
    }
    // Vérifier si l'option de la grille hexagonale a été sélectionnée
    if (document.getElementById('inputGroupSelect03').value == 2) {
        // Définir les coordonnées de la zone d'étude
        const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
        // Définir la taille des cellules
        const cellSide = 500;
        // Définir les options de l'objet de la grille
        const options = { units: 'meters' };
        // Créer la grille hexagonale
        const hexgrid = turf.hexGrid(bbox, cellSide, options);
        // Ajouter les données de la grille à la carte
        map.addSource('grid-source', {
            type: "geojson",
            data: hexgrid
        })
        // Ajouter la couche à la carte
        map.addLayer({
            id: 'grid',
            type: 'line',
            source: 'grid-source',
            paint: {
                "line-opacity": 0.2
            }
        })
    }
    // Vérifier si l'option de jointure spatiale a été sélectionnée
    if (document.getElementById('inputGroupSelect03').value == 3) {
        // Définir les coordonnées de la zone d'étude
        const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
        // Définir la taille des cellules
        const cellSide = 500;
        // Définir les options de l'objet de la grille
        const options = { units: 'meters' };
        // Créer la grille hexagonale
        const hexgrid = turf.hexGrid(bbox, cellSide, options);
        // Compter le nombre de points dans chaque cellule de la grille
        const joined = countPointsInPolygons(randomPoints, hexgrid)
    }
}

// Ajoute un événement 'click' sur l'élément HTML avec l'id 'union' pour charger le resultat sur la carte Mapbox
document
    .getElementById('union')
    .addEventListener('click', union);
