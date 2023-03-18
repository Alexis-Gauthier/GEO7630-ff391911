Laboratoire 9 - GEO7630


# Prérequis

Créer nouveau fork - dépôt

git fetch upstream

git pull upstream

git checkout Lab6

Étape 1

Dans le répertoire ou se trouve le dossier, double cliquez sur le fichier lab6.html pour vérifier que l’application fonctionne bien

Étape 2

git checkout -b lab6

  


Étape 3

Changez les coordonnées de départs de l’application

Sauvegarder votre fichier

Ajouter votre fichier 

![](https://lh6.googleusercontent.com/KmzAw-ZLrF5pTRkJUO_bKrRmkeUWaAA29XMlGDrcECqaK31LyGFlHeWXojvF8mpjZlXkvYrZ6-F6t1gOTYrl13w1j-e1BrnpttKoitwihD1AYnvw5BhysVxG07XaSP6-gFqZCgGs2PVuP9OKGM68vR4)

Étape 4

git commit -m ‘new start coordinates’

Étape 5

git push -u origin lab6 

Étape 6

Changer la couleur du geojson de rouge à #9f40ff

Sauvegarder et ajouter vos changements

![](https://lh5.googleusercontent.com/nkz8tqn1omULCLSM7to_qTujKJVlWDFeHKZvsIbvR-Gw7vqpzML3ESjSwSeV5kfEmzwMR7VOx-WflsICBlJwnQml2VtrsHLpfl9rIjSNJDNCP9ncvG622c13Ao5tiMg80M_V3zQRF11ab6O7qe_Rh-Q)

Étape 7

Commitez

Étape 8

Poussez

Étape 9

Créer un nouveau fichier dans la racine du projet

![](https://lh4.googleusercontent.com/E9p2nz1wfF9a5nnMK9UP4EZQ4JNBkJONY_3uo0htsWR_jit_hrvpsTRytZfXJ22xh41EHdlJZM77WqTHUbnrQ0aQ4pBcJQlcY0Vnq65wyEoRTP_Jdo-qrOjYiZ1M8dCiTIhFhWY7vDrpZgSfYwzBMME)

  
  


randomColor.js

![](https://lh5.googleusercontent.com/Sht-E2cMiji0pz7BhhoELjAJG5iRRntQ1U8hqB0Hy_VpyDB0kBStW8-Il7UwWl-ECI_W3ePeMqumd7buSOUCiILOChwir9ObBU3CZRR_P6r_RY8rYODeVVQZ72p62JAzIjFMM2FQH4geaX9x-VCDNa8)

Étape 10

et copier coller ce code

_function randomColor() {_

_  // Generate three random values between 0 and 255_

_  var r = Math.floor(Math.random() \* 256);_

_  var g = Math.floor(Math.random() \* 256);_

_  var b = Math.floor(Math.random() \* 256);_

_  // Combine the RGB values into a single hexadecimal color code_

_  var hexColor = "#" + ((1 &lt;&lt; 24) + (r &lt;&lt; 16) + (g &lt;&lt; 8) + b).toString(16).slice(1);_

_  // Return the color code_

_  return hexColor;_

_}___

![](https://lh6.googleusercontent.com/fnL14NOA3miPxJvL-_5Am8IVI7LV26MX2gsvSEZIXdGD26x8P5AT0rhmYKLySohUJtQUC4D3YT8pjEw48LgUs8tbXIo-vcEdTIa-eYUZkcZFIc42pESo4fzzi2ZGpfLpq2y8FvuofpdjJiyf-ruJfuQ)

Étape 11

Ajouter randomColors.js

Dans le fichier HTML au dessus de lab6.js

![](https://lh6.googleusercontent.com/QRJL8Tuxua_J3ABlL5J_P4nLQIMIXw7t6ju7zickI1YVvtak_U8EZyqWIdeJzaiLvqP2T9SrT3vQnQu6tWIY5cZQ1rgIdpYUM8WzXKbehqYfv3y-saL3LHBGJzyqdBQhewr8hBCyHEWZ_pmnLZNbusc)

 

Étape 12

- Modifier la fonction colorPolygons() dans le fichier lab6.js pour mettre une couleur aléatoire sur les polygones
- Changez la propriété de couleur en 3eme paramètre “red” pour la fonction qui retourne une couleur aléatoire.

![](https://lh5.googleusercontent.com/u2yJJ4pkHC8rNIgU18A3dcMlyko9EnWkCD_cJx3XyMkgmJG7fTdGlWJwn6YL1xOMmSj6D6VPsvTV52dewufNns4Ns-r7ppMwcRY3oZ6IpyJiGxjbkoCX4vo6I4RLBkQsAQIwmV8rgztUAUDVic8ZK80)

Étape 13

- Testez vos changements dans le FE

Étape 14

- Changez la couleur thématique en fonction d’une propriété du geojson 


- propriété à utiliser : operator_id

  


 _       map.setPaintProperty("geojson", "fill-color", {_

_        __ __property: 'operator_id',_

_        __ __stops: \[_

_            \[2, randomColor()],_

_            \[3, randomColor()],_

_            \[15, randomColor()],_

_            \[20, randomColor()],_

_            \[25, randomColor()],_

_            \[30, randomColor()]_

_        __ __]_

_}_

Étape 15

Testez vos changements dans le front end

Étape 16

- Commiter votre travail dans github (enregistrement local)

Étape 17

- Pousser votre travail

Étape 18

- Ajouter une couche d’étiquette


- Au même endroit ou votre fonction ajoute la couche des garages lorsque vous cliquez sur le bouton (hint map.addLayer)

Ajoutez-y le code suivant pour ajouter une couche d’étiquette

Remarquer le id a changé (les id doivent être unique)

Le type de la source a changé

Ce n’est plus la propriété paint que nous utilisons mais la propriété layout

On utilise la nomenclature get pour aller chercher les valeurs de operator_id comme valeur d’étiquette

_        map.addLayer({_

_            'id': 'geojson-label',_

_            'type': 'symbol',_

_            'source': 'geojson-source',_

_            'layout': {_

_                'text-field': \['get', 'operator_id'],_

_                }_

_        });_

Étape 19

- Commiter votre travail dans github (enregistrement local)

Étape 20

- Pousser votre travail

Étape 21

-  Merger votre travail

  


Good job ! 
