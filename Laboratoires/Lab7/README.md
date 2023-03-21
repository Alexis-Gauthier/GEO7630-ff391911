Laboratoire 7 - GEO 7630

Configuration Geoserver et mise en place de service WMS, WFS

  


[Configuration et lancement d’une instance de Geoserver 2](https://docs.google.com/document/d/1_tU7ggpgXK-zuR3ozbCFUk50wJ4vwCngGcVa6qIn9LA/edit#heading=h.d1nzl2zi4y2v)

[Chargement d’une orthophoto dans Geoserver 7](https://docs.google.com/document/d/1_tU7ggpgXK-zuR3ozbCFUk50wJ4vwCngGcVa6qIn9LA/edit#heading=h.ps6tcg2ch5d6)

[Chargement de table postgis dans Geoserver 12](https://docs.google.com/document/d/1_tU7ggpgXK-zuR3ozbCFUk50wJ4vwCngGcVa6qIn9LA/edit#heading=h.r8npx0cs7rm8)

[Création d’évènements pour ajouter un WMS ou WFS dynamiquement dans une application MaplibreGL 16](https://docs.google.com/document/d/1_tU7ggpgXK-zuR3ozbCFUk50wJ4vwCngGcVa6qIn9LA/edit#heading=h.1ko7tn204gww)

[Création de 2 boutons pour charger des sources distantes 16](https://docs.google.com/document/d/1_tU7ggpgXK-zuR3ozbCFUk50wJ4vwCngGcVa6qIn9LA/edit#heading=h.uc5w08uaic2i)







## Configuration et lancement d’une instance de Geoserver

Ouvrez un terminal à la racine du projet

Lancez :

_\`sudo chmod -R 777 ../Laboratoires/Lab7/ && cd Installation && sudo docker compose up -d\`_

![](https://lh3.googleusercontent.com/VRy_r1lWTyoefBiAOfS7bmWOSU9GcBbXiHpCMxSpXkggg14sb3l90duGGctQIw1f1iRq6ybxhX6D8g4x_kylHk-wwdtJznmQ5gjNKLrqBNLwxoSUQOAVphHSaDC2yKg1y5wlA3kMm31D9bDFmc52nz0)

  


Cela va installer geoserver cela peut prendre quelques minutes (1-3min)

Cliquez sur l'icône baleine de Visual studio

Assurez vous que Geoserver soit bien VERT

![](https://lh4.googleusercontent.com/7jBVkxWi5aUa7WjqA_n2j8zTMXBTXWY26u12NtCjVaeNfKR_jqK3Tq6tGdEO9jQrNrvOJ7B6wUjPQpw1jVmcET7uY9Y2xgb9o34bvPozh0lqY9Vv4ZmMmcA99l2FwUdDZKf4uZksa4ovi1u185GD7C4)

Vous avez maintenant  un nouveau répertoire GeoserverData

Copier - coller le répertoire Data dans GeoserverData

![](https://lh5.googleusercontent.com/h-CdHCKmkd0igQepE3Hx1mifSSLhyg79MG3x1iBm_mdcL_pafb3dgQXKDGq-VqjvaiyuzQlhKbP0vFtP0tSZr4Nz_fFLd0GqL5iKmBfkhBEbOKUfYePw5nQhPA5DwRdv4Va5i_5n1JcfzS-sqwq9i_0)

  


Ouvrez un navigateur web à l’adresse suivante : \`<http://localhost:8080/geoserver>\`

Connectez vous en tant qu’administrateur : admin/geoserver

![](https://lh6.googleusercontent.com/43hxB63zjabf5Ri8T0YEOH0GwcUdBS9PGDjDvfK_Ly4I7tkAcHzC2rpPfeLWmono_gcYZOYsXvaUzCveDcwCQvEuGmLM7m_Lfy4UZ7QYeiQ3t7vU9gzBcAgWcUcsl54ZR3vl2OqTkfyfbaB2c0AMwk4)

Bienvenu dans l’interface d’administration

Ajoutez un **Workspace **: geo7630

![](https://lh6.googleusercontent.com/LtvzjISzzRZ441Wy6JN3ZhEOKAo3ejwhRhKseeiL2a9GqKi3I3_ez1H7Uwg9vi0p285Pes8psymNk1KbA5o3Yao4Ts0T0ff_Madz_K2mNwX4iJV5fZhhZCGBj-OE0TfOrbJoXAjUsDd_RjGQXrZRw-4)

Maintenant activez les services WMS et WFS pour votre WORKSPACE

![](https://lh3.googleusercontent.com/76RMO_VU6WJpBEctZpnBNyVaAqD0f4V9X-gau1meQzEhODFhcDZLI37SPsDUrvWOvPf1iHNzJ2eJfPqdH6bxKgcbDpSdlWEiDyZG-9HTcH1T18h6ieZaV788b0KYV-UAMyQLSMUjLbOSKXWWgsoCfYI)


## Chargement d’une orthophoto dans Geoserver

Ajoutez un nouveau “store” de type Raster Data Source – WorldImage

![](https://lh3.googleusercontent.com/WGRGL7QFsOiZ-o_R1pPsMEpS80ySIB6PtbnmHxXkwd4z8Ct9q_iKE6Sf2s_CX2BRi9iq1E0FGtZbr-zFg4rH83qUj2j7gSGXPv7PGAk_yfQVI5GJcAaqNYxo6hFOMgGT6EcXLu1gg8GpWbm10rDtRrM)

  


![](https://lh4.googleusercontent.com/BVqeD_AWscheB8Oy9wmSj03Tw5RMu3Qbkt_AFUA5c4pIIRXiGVtC5n4HQ_JCtiSLsB5lM36DNIit8sGPoleWvHMVOkiptE-OycD4HhcGOZUmtZpJFn5PdnveSqnR9OStPsxPlyPrKS4NWWMAStElaLo)![](https://lh6.googleusercontent.com/Z3PhMJ4HEqsmtAB07Et-JKFDQG7EPK3SuYQz7w6RSRD1aRxGqSN2ExFeMnWJkf6jaNST0RLRmaVkyrhfefS6hj6NCOtwoihEn0i8wPahJX9fONJWvPlYcUQq56XgiNQGsN2RIK9GwvSUsLf0PwhbCWw)

![](https://lh4.googleusercontent.com/vYNkN55m0Jz5wNzQZvXQmw1y10r6uNqNq3qP_QyU-dOoNNJ_K3zTRjaFBK88y7qzhcAuziQDWtuUTerDwZjZHs7_ajCCRkF71QroKEy1pLnWGUgwFkCVUeriv7hfXLwUlGubfMDEBd63QZQUL8G5cnk)

![](https://lh4.googleusercontent.com/PHwupbP5YHj0i__ADXz8XPmd_rg3-_bLabbqYan8WXA2Uwy7KlhsAX9Nx-0pLB0lPqZqgptJlmJgetSPcRmJdDw0S9RVoGxYjYDm0JF2jFyV_GNBmKTgTyl8nN8byFv0_R6dz3CNw7J5TwVhdKk6Oy8)

Cliquez **Publish **pour publier votre nouvelle couche

Dans les propriétés de votre nouvelle couche déclarer la reprojection

![](https://lh5.googleusercontent.com/pe8MelirJX04G8BUFMVUPo_v4q1Q4BWXDBqdEPGAynxhSqXORw-Qci6Zt2gXlx__1ImpokuRgD1uiE7pz9iLCI5hM5RHGGx5SnvJEq3l42a6HIVg9y-RwYc33FQCgyE83e3ORkVVfZGVT27pTu7Tcx0)

  
  


Ensuite sauvegardez

Pour valider que le shapefile est maintenant servi correctement par Geoserver allez dans Layer preview

![](https://lh4.googleusercontent.com/E9s9Zm4MapSHrn0wwvDArLj1rz-JezSUwTfHqlC4eSIqSb3Ef0wA6Jxye7D5NZqtKwugWYI2Hfd-9e41Ar_9_RxluQpNW4M9xgWgeAFspf0WQRoCEo4BQfZO4kxiYxAdnzCONfZFvYaQp_LsHdq16Rs)

Cliquez sur OpenLayers 

![](https://lh3.googleusercontent.com/6XbWuJMDWUgA9igOegFxQWAUROZ0VzBuGAegv1slNWT185RLBdDOYaOfCjAzhBrtDI0Sn9uJAblUnpSBoRX5kX29KZSZp2GQt2WqAxqhAOcLa-iWJ-6N6DXQ26s1ALGYPZTtmK3qmNPMQ-nKGhNsk2s)

![](https://lh5.googleusercontent.com/ysds-FXl55FuKkc8cHbfjXddLkSto_fuYj6O8M3b1BhnM2ZzDoyjy5JagMerhAns1tgjztTlCDPVPPQS0FIyBbHXc46axytwjwVe8oSlOJAthrpcGqb4htHQv4TJsU0yMFQpCt5pef0YlJ2QjwCzWEA)

  


Vous avez maintenant accès à un service WMS de votre image


## Chargement de table postgis dans Geoserver

Répétez le même processus de chargement avec une table postgresql

P.S N’oubliez pas de reprojeter vers 3857 si nécessaire

Chargement d’une table PostGIS vers Geoserver 

Créer un nouveau store de type Vector - PostGIS

![](https://lh6.googleusercontent.com/Pj8_ZbCNsrsIAQzYTgG9_cVA6iY_m2oJpYNgT2GreDECvKOCFSy7xj4t0cET7DY7bGl-RbtjkiQ4rwq_1C1knRtArpRt-cdt6ytbnGzfd3UkJ7datxz581n-yCseiiYdNBsimop2TTo2RYPNU5jHrBE)

  
  
  


![](https://lh4.googleusercontent.com/T4hBpf2UGD_BadAKZR0EcGYiPxefn1iV1kxtaEPCrJ4khIHwoCFJeDtVbsyQ8CfKuRIZCwAdZj5iu-RcqYpWnGqzoDQm0dca7uxlz8k1e4ofFcf6RAssgK7AkgQAgq969MTjaeFf6zw99qUPBGPeV7M)

Si vous n’arrivez pas à vous connecter à la bd avec l’adresse IP suivante : 172.18.0.1

Pour la trouver il suffit de faire un click droit sur le container docker (baleine) POSTGIS et choisir INSPECT

![](https://lh6.googleusercontent.com/1ujRt_ZyJjOPvXXsJcZA8lJxfBh2YkmFClBu1i6fqWoU-hsPJZJC39opfL3eG76619f2av4vOxvA5PPHPokOdxNCZh9n5ZYAz4u8GEr17Sys6wsItsptB7MsD9Wl6yZyUzutXPWd2eKB_xxSVw03geQ)

Chercher pour GATEWAY vers la fin du code vous devriez voir un GATEWAY c’est cette adresse IP qu’il faut fournir à Geoserver : 172.18.0.1

![](https://lh4.googleusercontent.com/DmDcij1zjo7wGQBUOZTM4VdohvPy6Qp2jHsrJ1-J-JxSHMvFKby7AxuMOLmL2th1teLxy8_veG33cGKEAAuJ3oYQWQXw7OVSIa_FqyBiprE4xKkNd6XEmZWQ0wh2LHqhXB_ZdE0T1KLzO4M8XelU8NM)

Ajoutez un nouveau layer issue de votre bd postgis

Choisissez PostGISDB

![](https://lh6.googleusercontent.com/X111y75uya6Tb-VLkd743vFJBe60hgycbrSuiWZGhlN0Aot5aMR9pkOMNkpMmEfrH7UdH4ZBflIpdX6t9p8RTd3uJyL2zyPeQfzIHGLHvOD19VFoC8X38QhyCwb6ZQ_bThdvzLrkldfBNUGMgI-HqYg)

Enfin publiez la table de votre choix

![](https://lh4.googleusercontent.com/5L5oI3Cj8J_H_sk_ZVpI0jK16v-xkGMNh7mCMKQ4poqhbZmkwVZhd6X7fzRdK6yVmM1xOR03Bx2SZsC5sI4x8DEXHoAkm9TEP_myoVPsJyM_nO_aS-smZjOW_eBsKXX9hVGrL7v7nWB7NEDYk_ZpQHs)


## Création d’évènements pour ajouter un WMS ou WFS dynamiquement dans une application MaplibreGL


### Création de 2 boutons pour charger des sources distantes

**HTML**

Ajoutez un bouton lié à un input pour charger une couche WFS

Ajoutez un bouton lié à un input pour charger une couche WMS

**JAVASCRIPT**

Service WFS

Ajouter une nouvelle fonction qui va vous permettre d’ajouter une nouvelle source de type **geojson**

1 - déclarer votre fonction

2 - votre fonction doit ajouter une source (map.addsource(configuration)) ([doc](https://maplibre.org/maplibre-gl-js-docs/api/sources/))

3 - votre source doit pointer vers un WFS servi par Geoserver voir explication données pendant le cours pour obtenir facilement l’url , sinon : ex 

![](https://lh3.googleusercontent.com/OFlpn-iK8TN7dOr4OPp0ggFeqNLogMaSZ1w_j3t7LQtsKtMs29FSPzV_7Y4urPGsYsHChzL3Gq413tBvG2SjNnDUa7i45mr-N0c6qd7tC0nIMz836TV7cOYEIeVzciYo7dJIiLVmuvTque_ylRvTjTA)

4 - votre fonction doit ajouter un layer (map.addLayer(configuration)) ([doc](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer)) 

Service WMS

Ajouter une nouvelle fonction (différente de la précédente) qui va vous permettre d’ajouter une nouvelle source de raster

1 - déclarer votre fonction

2 - votre fonction doit ajouter une source **raster **(map.addSource(configuration))  ([doc](https://maplibre.org/maplibre-gl-js-docs/api/sources/))

3 - votre source doit pointer vers un WMS servi par Geoserver voir explication données pendant le cours pour obtenir facilement l’url , sinon : ex 

![](https://lh5.googleusercontent.com/R0vhFxiP5ttRjmOYnC8M_Klvyg3_q52xqXx-LIfw5-sq5bEqYkiKtv0FQlh8c1X6s70mKiYdo1whVBbWnkkmiHZH_rOukiGpdqzIy8m1c5gqHGZ8l1cs6N18mbrLsV2_tjbnyGZKqFesCb6rhl9MW28)

Assurez vous que vous avez bien 2 fonctions javascript qui écoute vos boutons avec vos nouveaux identifiant (comme dans le Lab6)

Assurez-vous que vos fonctions javascript déclenchent bien les bonnes fonctions.

Maintenant lancez votre fichier HTML local Lab7.html

![](https://lh4.googleusercontent.com/3CZCZh_VrwjEFCTydlYYKldUp-VZHpsM8xix1u0vVdPKD2dcuc7fuMYC4UsgrgrPd_1X4XDbvl5vlQwryR91l6bB6MBL9Wx6rg7i2sBL5xpo2IxYNd3pZLQ2mpCL7Epzze-dk9t3JT3UsLspv7obYzI)

Lorsque vous cliquez sur le bouton WMS cela devrait charger l’image aérienne

Lorsque vous cliquez sur le bouton WFS cela devrait charger le WFS en format GeoJSON

![](https://lh3.googleusercontent.com/xd4Qbjjp1hlta_Mz66SSO25_4w84_G4_Uym1uwxlgyuHBEFhfwMtKYT87RHji1cNdBEDfOfFmZa-M2vLekMIQXl_PzqAtaa0SQ1wVA3vqrT4i9keOluahiUckCYwPLvImoZqtkT9u402kS6pVFtvmx8)
