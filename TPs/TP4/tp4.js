// On ajoute la couche GeoJSON à la carte
map.on('load', function() {
    map.addSource('donnees', {
      type: 'geojson',
      data: ''
    });
  
    map.addLayer({
      id: 'points',
      type: 'circle',
      source: 'donnees',
      paint: {
        'circle-radius': 6,
        'circle-color': '#B42222'
      },
      filter: ['==', '$type', 'Point']
    });
  
    map.addLayer({
      id: 'polygones',
      type: 'fill',
      source: 'donnees',
      paint: {
        'fill-color': '#B42222',
        'fill-opacity': 0.5,
        'fill-outline-color': '#B42222'
      },
      filter: ['==', '$type', 'Polygon']
    });
  });
  
  // On lie le bouton de chargement de fichier à la fonction de chargement de fichier
  document.getElementById('file').addEventListener('change', chargerFichier);
  
  // On lie le bouton de zoom à la fonction de zoom sur les données
  document.getElementById('zoomto').addEventListener('click', zoomerDonnees);
  
  // On lie le bouton de colorisation à la fonction de colorisation des données
  document.getElementById('colorier').addEventListener('click', colorierDonnees);