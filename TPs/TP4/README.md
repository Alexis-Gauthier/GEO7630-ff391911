#TP4 - GEO7630#

Réalisée par : Alexis-Raphael Gauthier

***

    Respect des consignes :  10%
    Un menu avec un texte descriptif: 10%
    Une légende interactive: 10%
    1 à N couche WFS : 10%
    1 à N couche VTS : ** 10%**
    1 à N couche matricielle WMS :** 10%**
    1 à N couche extrudée (2.5D) : 10%
    1 à N couche Lidar 3D Tiles : 10%
    1 à N KPI dynamique : 10%
    Animation des données :** 10%**
    Utilisation de 1 à N librairie externe: 10%
    Respect des bonnes pratiques UI/UX: 10%
    Respect des bonnes pratiques sémiologiques:10%
    Pertinence globale de l’application en fonction de la thématique choisie: 10%
    Documentation du code : 10%
    Mise en production de l’application : 10%

***

Section HTML:

- Le type de document a été défini à l'aide de la balise <!DOCTYPE html>, ce qui indique au navigateur le type de document à afficher. La structure HTML de base a été créée en utilisant les balises <html>, <head> et <body>. Dans le <head>, le titre de la page a été défini avec la balise <title> et la balise <meta> a été utilisée pour spécifier l'échelle initiale, l'échelle maximale ainsi que l'interdiction de redimensionnement de la page. Deux balises <link> ont été ajoutées pour associer les fichiers de style mapbox-gl.css et tp4.css à la page HTML.

- Une barre latérale de navigation a été ajoutée à l'aide de la balise <div> avec la classe sidenav, et des liens ont été ajoutés pour présenter la carte, pour afficher les sources de données et pour ouvrir la version ArcGIS Online de la carte.

- Un conteneur pour le menu principal de la carte a été ajouté avec une balise <div> portant l'ID menu, et un conteneur enfant pour le menu principal de la carte a été ajouté avec une balise <div> portant l'ID boite. Des titres ont été ajoutés pour le menu principal de la carte avec les balises <h1> et <h2>. Un conteneur pour la carte a été ajouté avec une balise <div> portant l'ID map.

- Un conteneur pour la jauge a été ajouté avec une balise <div> portant l'ID jauge et deux balises <div> pour la jauge elle-même, une pour la remplissage et une autre pour la couverture. Des scripts ont été ajoutés pour associer les fichiers de la librairie mapbox-gl.js et tp4.js à la page HTML.

***

Section Java Script : 

- L'accesToken de Mapbox est d'abord défini. Il s'agit d'une clé qui permet d'utiliser les API de Mapbox.

- Une nouvelle instance de la carte est créée en utilisant la classe Map fournie par la bibliothèque Mapbox. La carte est initialisée avec les paramètres suivants :
    La carte est affichée dans la div avec l'ID "map".
    Le style de la carte est défini comme étant "mapbox://styles/mapbox/streets-v11", qui est le style par défaut de Mapbox pour les rues.
    Le centre de la carte est défini comme étant le centre de Montréal (longitude : -73.5673, latitude : 45.515).
    Le niveau de zoom initial est défini comme étant 12.

- Un événement "load" est attaché à la carte. Cet événement se déclenche une fois que le chargement du style de base de la carte est terminé.

- Une source de données de type "geojson" est ajoutée à la carte en utilisant la méthode addSource de la carte. Cette source de données contient les données des limites de la Ville de Montréal. Les données sont récupérées à partir d'une URL fournie qui renvoie un objet GeoJSON.

- Une couche est ajoutée à la carte en utilisant la méthode addLayer de la carte. Cette couche correspond aux limites de l'arrondissement Ville-Marie et est définie comme étant une ligne. La source de données pour cette couche est la source de données "limites" ajoutée précédemment.

Une source de données de type "geojson" est ajoutée à la carte en utilisant la méthode addSource de la carte. Cette source de données contient les données de criminalité de la Ville de Montréal. Les données sont récupérées à partir d'une URL fournie qui renvoie un objet GeoJSON. De plus, les données de cette source sont regroupées en clusters pour les crimes dans un rayon rapproché de 50 pixels.

Une nouvelle couche est ajoutée à la carte en utilisant la méthode addLayer de la carte. Cette couche correspond aux clusters de crimes et est définie comme étant des cercles. La source de données pour cette couche est la source de données "vol_data" ajoutée précédemment. Cette couche utilise également une expression en escalier pour définir la couleur et la taille des cercles en fonction du nombre de points dans chaque cluster.

Une autre couche est ajoutée à la carte en utilisant la méthode addLayer de la carte. Cette couche correspond au nombre de vols par cluster. Cette couche utilise la police de caractères "DIN Offc Pro Medium" et est également définie en fonction du nombre de points dans chaque cluster. Cette couche utilise la source de données "vol_data" ajoutée précédemment et le filtre "has" pour afficher uniquement les clusters qui ont plus d'un point.

***

Section CSS : 

- Centrer le texte du body en utilisant la propriété "text-align" et en lui donnant la valeur "center".
- Centrer le bloc de contenu (#content) en utilisant la propriété "margin" et en lui donnant la valeur "0 auto", qui centre horizontalement le bloc en fonction de la taille de la fenêtre.
- Appliquer un dégradé linéaire (#333 à 20%, transparent à 25%, transparent à 100%, #666 à 100%) à la partie supérieure du menu (#menu).
- Appliquer un style inline-block aux éléments de liste liens (#menu li) pour les aligner sur la même ligne horizontale et ajouter un padding de 10px.
- Appliquer la couleur blanche (#FFF) au texte des liens (#menu a).
- Ajouter un padding de 20px à la boîte (#boite).
- Appliquer la couleur blanche (#FFF) au texte de tous les éléments enfants de la #boite, sauf pour le titre h1 (#boite :not(h1)).
- Appliquer une couleur de texte rouge (#FF0000) au titre h1 de #boite.
- Appliquer une couleur de texte noire (#000) au bouton (#boite button).
- Définir une position relative pour la carte (#map), avec une largeur de 85% et une hauteur de 500px, centrée horizontalement grâce aux propriétés left: 15% et right: 15%.
- Créer une barre de navigation latérale avec une hauteur de 100% (#sidenav), d'une largeur de 250px et d'une couleur de fond noire semi-transparente (#38333386), fixée en position grâce à la propriété "position" avec une valeur de "fixed". Le lien est décalé vers la droite de 100px et vers le bas de 110px à l'aide des propriétés "top" et "left".
- Appliquer un padding de 50px en haut de la barre de navigation (#sidenav), et supprimer la barre de défilement horizontal en utilisant la propriété "overflow-x" avec la valeur "hidden".
- Ajouter un style de texte aux liens de navigation (#sidenav a), avec une taille de police de 25px, une couleur de texte grise foncé (#818181) et un padding de 6px en haut, en bas et à droite, et de 16px à gauche.
- Ajouter une fonction de survol des liens de navigation (#sidenav a:hover), qui modifie la couleur du texte en blanc (#FFF).
- Ajouter une marge de gauche au contenu principal de la page (#main), équivalente à la largeur de la barre de navigation latérale (#sidenav), en utilisant la propriété "margin-left".
- Ajouter un élément de jauge avec une largeur de 200px, une couleur de fond rouge (#e73434) et une bordure de 1px solide (#333131) (#jauge).
- Définir le style pour le corps de la jauge avec largeur de 100% et hauteur de 0, remplissage de 50% en bas, fond gris, bords arrondis avec un rayon de 100% pour le coin supérieur gauche et droit.
- Définir le style pour le remplissage de la jauge avec position en haut de la forme circulaire, largeur égale à celle de la forme parente, hauteur de 100%, fond vert et rotation de 0,25 tour pour créer un effet de remplissage.
- Définir le style pour la couverture de la jauge avec taille de 75% de la largeur de la forme parente, hauteur de 150%, positionnement au centre de la forme parente avec décalage à gauche de 50%, centrage de texte, forme circulaire avec un rayon de 50% et fond blanc.
- Ajouter un style pour aligner verticalement et horizontalement le texte à l'intérieur de la couverture de la jauge, avec remplissage de 25% pour le bas et dimensionnement de la boîte de texte en fonction de son contenu. - - - - Définir le modèle de boîte sur "border-box".