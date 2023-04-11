# Laboratoire cours 12


# **[**Laboratoire cours 12**** ****1**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.6xp8lo9ezpif)[**Prérequis :**** ****1**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.ow87l5ef1vz6)[**Créer et styliser des clusters**** ****2**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.86zhcmbby4fa)[**Créer et styliser une carte de chaleur (heatmap)**** ****4**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.t1qmum80efu0)[**Créer et visualiser une couche de polygones extrudées**** ****5**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.16o8i8abd4lp)[**Ajouter du terrain 3D à une carte MLGL**** ****6**](https://docs.google.com/document/d/13q-uzrJ22Hj56a0R4qr49xpgBpia7aAEsGNXsmDc5I0/edit#heading=h.z1lgyicu07ur)**


## 


## **Prérequis : **


# **- Pull upstream du dépôt

- Avoir suivi le cours 12 pour la théorie sur la création des modules et l’architecture applicative

- Assurez vous que tous les containers Docker sont bien éteints

- dans un terminal  : \`cd Laboratoires/Lab9/\`

- dans le même terminal : \`sudo docker compose up -d\`![](https://lh4.googleusercontent.com/EusKWBkxyhzi8okKRgmkeh1Of4sf2xdocDWby9-DXhaUKmBFGYZkEegTDecsvjP84G6ScT4ldFZrwTpKsRJUtcMx_oNngf4lwZop9W-u1nnU3O1FZCIpueel82hhubrnNUVjN31rpDUrtwZ5EUlRows)

- Assurez vous que votre environnement local est up and running en allant sur : 

  - http&#x3A;//localhost:8000/app/Laboratoire9.html![](https://lh3.googleusercontent.com/RRoU2R3wT2mXBxaoGfV2MI2QEJzaGQQEBBGTrTES6od3tsoRQyHJE5kSgdvxH36u5YuD_2X0z_UOuoWKDVIpXr4Bz4-0cdeNdWxJ9ZgZITDTQo75IaHnt3ePCruuLmZTDx-T2nsrUati1bFkjmG9YrU)**


## Créer et styliser des clusters


# **[Create and style clusters](https://maplibre.org/maplibre-gl-js-docs/example/cluster/)1. Créez un nouveau module javascript \`clusters.js\` pour générer une couche de cluster
2. Dans ce module ajoutez une nouvelle fonction : **\`function generateClusters() { }\`**
3. Dans la fonction commencez par nettoyer les layers existants avec la fonctionnalité déjà en place : **\`removeAllLayersAndSources()\`**
4. Dans le module app.js  ajoutez une nouvelle source geojson qui comprend la propriété **\`CLUSTER:TRUE\`** comme dans l’exemple mapbox
5. La propriété **\`data\`** dans la configuration **addLayer **doit référer à la variable **\`randomPoints\`** du module javascript **\`randomPoints.js\`**
6. Une fois terminé, ajoutez le **“listener”** pour exécuter cette fonction lors du click sur le bouton
7. Le **&lt;button>** id du bouton se nomme : **\`'generateClusters'\`**
8. N’oubliez pas d’ajouter la source du module javascript dans le fichier html **laboratoire9.html**![](https://lh5.googleusercontent.com/5YdsJlwK5IC5CPbTHCDE7rsawbINeA1DUR_YRXRjGEEC6sX4Cae82dGcIOKsCubiu1m9GVl5h6hYtDnPOPL8CLnz_uixAXhrnsYFrTQ-OS3AMKrRdGw1_fkVAUflzGC6qaA2OIRdNpuWiq_6E2lSvvE)**


## 


## Créer et styliser une carte de chaleur (heatmap)


# **1. Créez un nouveau module javascript **\`heatmap.js\`**
2. Sur la même forme que le module précédent ajoutez un** bouton HTML** à la page **Laboratoire9.html** donnez un identifiant à ce bouton : **\`generateHeatmap\`**
3. Ajoutez une source et un layer de type **heatmap**, suivez l’exemple Maplibre
4. N’oubliez pas d’ajouter la **source du module** dans laboratoire9.html![](https://lh3.googleusercontent.com/Gn8b6N2DLydAHRL_cU3F5Sx9hmp43wi2hCmNE2KbLtO2GOc0OGi4ZXqnDl5_YDgqks69Tzu5DRoHCBuXLtjCzSGnzQ0N8E1zZQsRSwlyKkWN6g00MjBExI8HcOE02pyPye8guQZqNzZtaZPq69KN-Do)[Create a heatmap layer](https://maplibre.org/maplibre-gl-js-docs/example/heatmap-layer/)<https://blog.mapbox.com/introducing-heatmaps-in-mapbox-gl-js-71355ada9e6c>**


## Créer et visualiser une couche de polygones extrudées


# **1. Créez un nouveau module javascript **\`3D.js\`**
2. Sur la même forme que le module précédent ajoutez un bouton HTML à la page **Laboratoire9.html** donnez un identifiant à ce bouton : **\`generate3D\`**
3. Ajoutez une source et un layer de type **\`fill-extrusion\`**, suivez l’exemple Maplibre
4. N’oubliez pas d’ajouter la **source du module** dans laboratoire9.html![](https://lh6.googleusercontent.com/eNaHlYsreDwUPYlBap5xU4zW-0RD2Fo8i4bynq5pXwII_xjxxrTmKtRKC1ANCA3_dESiCYChw9Nw2Wg5w50ESzAfTtBES7DVHVVXxseL5c29jcPIgE-eWy01m5iKHkVOQEntw_iHYh-lMMEYbM_Z8yQ)[Display buildings in 3D](https://maplibre.org/maplibre-gl-js-docs/example/3d-buildings/)**


## Ajouter du terrain 3D à une carte MLGL


# [3D Terrain](https://maplibre.org/maplibre-gl-js-docs/example/3d-terrain/) - Laboratoire cours 13
