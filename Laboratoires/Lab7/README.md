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

_\`cd Installation && sudo docker compose up -d && sudo chmod -R 777 ../Laboratoires/Lab7/geoserverData`_

![](https://lh5.googleusercontent.com/_G312KCKFjuYv2g0txYJf2uBIonJRMUcqncIOcCG_v7uYMsnDsUn9ayzNiKxeEkNa_KR2yYsavtW-s1P7ZgVA4KuHxyy7bd0eY8YEWa37fHP968D-VC9GjSbQhke4_yWKdWGYr0eqwZp6xBFF6BcBDw)

  


Cela va installer geoserver cela peut prendre quelques minutes (1-3min)

Cliquez sur l'icône baleine de Visual studio

Assurez vous que Geoserver soit bien VERT

![](https://lh3.googleusercontent.com/iwBeXCJgk2gFMC5EN8IcUkcK0VTPci9rYh0NcPZI2n0raKBQlmiIbzSxGgnPcBbtO7tbhpKC1oyYUoZ6nwYZIxrysm-GmlaRI_hw-xgBPqDNiKNQZLmW18cABYO6N7jH3HEZxSMzyjWL0Ofe1MAKZZo)

Vous avez maintenant  un nouveau répertoire GeoserverData

Copier - coller le répertoire Data dans GeoserverData

![](https://lh4.googleusercontent.com/rPDEYDam0w5_oZq4JKO0A2VTl2Fkx8J5KsQV2YwGspJufZ8A88emCyZvuy4u2DDQzVjCQwLx-SQLtj4taNSRTdKBXH3in-EIQJpdpBjfjh7W4bHim70erpbI0ayhlejDOasufxeYlYBP1WtURJ1cxwY)

  


Ouvrez un navigateur web à l’adresse suivante : \`<http://localhost:8080/geoserver>\`

Connectez vous en tant qu’administrateur : admin/geoserver

![](https://lh6.googleusercontent.com/9BZDfKMN9sLozAzub6dOpXRjfjNJuqgw1z0eyIWb57l1tcpPaDPH_33_TwPqPX6G2fvM8_Py_K0HHVKqBrRCQdbZINkX6kDhGOdiYTpjyCklAtislaiYA_ArB0Z48dbXbPgco1EUJE66Co_0w3QHBBg)

Bienvenu dans l’interface d’administration

Ajoutez un **Workspace **: geo7630

![](https://lh3.googleusercontent.com/dAoKq7MDeaAm8TEd2uNPH5AxH_zbxbaPIXvj2b-reZExTiIQQcel_hJLN4O8rOyz_joFVuztw4l0mPcf2HoitFkgvWCj8-J0FAYsIuc8U0iYjFj13HfaCkaU2Mzq-wh6LTaQqP8R4wsGEc1gzuSpQS4)

Maintenant activez les services WMS et WFS pour votre WORKSPACE

![](https://lh3.googleusercontent.com/5Y50E5C3tJbvfX_izvvdCd8KnIXu4hPTT7wV1c3neW-Ki4IQBjfEHEFBgMYQAMGRwHqFN1FFKm7vkN3ofb15mcRWI_ZZ-mzlzLATammdvJVeromY7qB5mD-W0ts_yFzHUjYSAlza6Daix75nNjMOjYw)


## Chargement d’une orthophoto dans Geoserver

Ajoutez un nouveau “store” de type Raster Data Source – WorldImage

![](https://lh4.googleusercontent.com/SKtIct8XgGu6AqozbtZe8CBxtU6ke2oPNuyge8dxO3nlwQDnm7EA5od74lpqJC_upMlH7dr60kb1I6nBr6vKh0zAiGoG36qdNgpky7K8uA98KHSLV1asTh7gfB6ujPWiAKIO5Z0Q7jvs5AofLOztwpI)

  


![](https://lh5.googleusercontent.com/grgSnho0I3wvWAWQVO0Mq3fCa2QN1oUdTGYC4-f7o1ktSRVC2W53Kx-UXVaMjF4gI8A1MLFkJoMkJahMbV1yckKAYUMngKtm7WZsjQgW21Dkfeb0lKMxXq9XlCVO534CjPVDmE35W4moEdn97WorZdE)![](https://lh5.googleusercontent.com/fJZkHiDX7_g_znTvUP131XgIymfvhZYvf0GXuSkyK4uYbhbVgcoB8of1qEprs7_JjKQp7nHSTlowUi1b5HGYqsc83gN3XGXoAJWHlIlUKnN-6NS6aXm7XQw6RJjVuSDqnBvwiubZ3j6W5FW5Zmdqoeo)

![](https://lh5.googleusercontent.com/HYw2nTfd8QuuNB6RvA2rMrDBBqG62a0wzoNnCj5nZBgTh7iEZtlEwHo3K9gFPG9ueBm8L0Av5FG42ROx4t8bOllegT4VVxgmDGIp6CUW6xx1j0oQjARZyqN95i6qD4euwXFbqhijrWuUs7RYwHzfTfs)

![](https://lh5.googleusercontent.com/tH4ruhUqVajTjqBhmK-OOh9RDOJT7tEQD45TpZ0umSl4DlMfyP4u8oRxcwohuo-u5HoXDHkErEEwMMmGpMjP3xaRbHIIFujFOfmtaE70MHADFqh8f_UGVcjngZFpT4VkuX67kiFkWqEMfd36o2lduXs)

Cliquez **Publish **pour publier votre nouvelle couche

Dans les propriétés de votre nouvelle couche déclarer la reprojection

![](https://lh4.googleusercontent.com/pS8pGz7FxOX0SPtmRVQhmVlKjhDVrgHrLwCJmPwxVgsJoXm6ktHMQZ7clqWX6JON8lLgweJhotPwF1eRATeMx0UFI4LC2RJ3ooMObWGSqq3tGGLcSQBHNvaTXxjFBeG0wRvnX8WqLPmsKPsKJA1MNzM)

  
  


Ensuite sauvegardez

Pour valider que le shapefile est maintenant servi correctement par Geoserver allez dans Layer preview

![](https://lh6.googleusercontent.com/3ReepP0SzDwIdYz4jhjVOZrj-Hjv507ac9uIliCk9lB22vTVDm_hOZ49pLIEJ0LqfgCrRPb2b1a1GbUaX4oa_oLnVDY9rwxC70BN7fFW0xDMMbg-IQUBGjSpnFe09Usc-9NcI3SAP-7EfzeDLng1mSM)

Cliquez sur OpenLayers 

![](https://lh6.googleusercontent.com/qCBZmIl6Q0qFpeHqzrQeSkApKTQ_It2HY88SgMbQyLvqeFA_dbDlyFT6S_rMyw8JTUGb-sA2HRpH8RF81O7nHTrxRDO1q28m76vAgYF5UNFYFXbXW7a0gOTI3QfV4TCc3h892x13ueW-5bDVrnzAqT8)

![](https://lh5.googleusercontent.com/VKayV6KHHrozQWqKGls6N21EVShBikSTiZWbs55vODpdh3F5B6jBsRCDKr2Yyjv9HcQkOGFuB-Wl8ZxGo0tiJuWrr2FAXp62_i4sTMvG9_AWOSeh3s0UeHHmE21PeOHecIlpszforOEtdUzwYPPnKMs)

  


Vous avez maintenant accès à un service WMS de votre image


## Chargement de table postgis dans Geoserver

Répétez le même processus de chargement avec une table postgresql

P.S N’oubliez pas de reprojeter vers 3857 si nécessaire

Chargement d’une table PostGIS vers Geoserver 

Créer un nouveau store de type Vector - PostGIS

![](https://lh4.googleusercontent.com/mHdbxstb-WD_U2ym4Qw113yjYkA_7iYbWqbK6pyd_11eCCC-8e3ty_rNzx20vwtwLgO_S873kiVQwKoBxVAXzXA1QvLejE7Yhsl26IbbhmHhxpOWnxfcqXU6btJAd2LCuv7y_lTNofZQGiqEfuORGbU)

  
  
  


![](https://lh4.googleusercontent.com/3V2PXVOldFTzZABPnt-lBOpVucu_MyAyT-cB0lAavHkAJFZQAXQV8VnWAeiSzYzX2ddYKH4cR8eiW7R0S8oYwaPOpWtmwAYX9MVsIBSaPPTLm7qWKTjDPiCOxUR38YnhrdFyhozJhdWOqzHD09KnmiE)

Si vous n’arrivez pas à vous connecter à la bd avec l’adresse IP suivante : 172.18.0.1

Pour la trouver il suffit de faire un click droit sur le container docker (baleine) POSTGIS et choisir INSPECT

![](https://lh3.googleusercontent.com/gWrtjneQHmTD8__CLyxlUmoJTgVx4afeKWlzz3Dxapvfjx-0MGx6uBc9YUfcWhmj295Xy05fsJ-0lrC57XmEui51dv4LxaFC4mFBWp5zhIRsqViV99Y2xc2298OoK0fR8xOTS50nxw5rFJT6ziKItog)

Chercher pour GATEWAY vers la fin du code vous devriez voir un GATEWAY c’est cette adresse IP qu’il faut fournir à Geoserver : 172.18.0.1

![](https://lh6.googleusercontent.com/D1AI_Tymd5XPMvz7VXaIfR5QOjzsucwdsIqxSiME3L0Qjiyhp0iAPSpkbfhMxe58vYvRX0aELei9nC8QUJMDf5fN-1Zd5Ev5HjCS_-B7of41wYt36KgFgyEeE3esqzlXViV9z5kwPDPi1u9QbcxfaVQ)

Ajoutez un nouveau layer issue de votre bd postgis

Choisissez PostGISDB

![](https://lh3.googleusercontent.com/MH5ij_i5JlaWS9sMsnJ82IB9KZOruHOeh4FTedXK6zRg8jXe6roBdEcIRjX9yuQsrd-J8CbBlBw4A3nbGmM9etzDQXwe42J0PNf63hK-huLHfx0OqTp-ncIsuBtDi7Zq4nBTd4hXSfkmKx-JeOojJnI)

Enfin publiez la table de votre choix

![](https://lh6.googleusercontent.com/301Yrt-Jppo2Bx8uB6X41kbNPESuaZ28atsYRfpsrwSV8dJXhdPAHpRbO1T5-Z8vZ_zhfQdQ8U9AJBwbHQJ8Al46Gl9qVvoAVLqeN0MFTsDsXeSuO-SZC6ZC8jktyH2B4EG147WJMEP8WSP0jlVoKeY)


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

![](https://lh6.googleusercontent.com/gEuxP8gDA3t1foYWcUXR0Aw0jnd29sCuPOK_HAO6Hr9K7pUc8kFZkMB39bGni9Kh0nUeQFsqcOM4QcXLNCedd_qY8_7rtGSWmcQKG-7uOC2AKvHOyOTIP4aXCHOf3mdHd_c3BzPHp6QB6qyfMcdRn1k)

4 - votre fonction doit ajouter un layer (map.addLayer(configuration)) ([doc](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer)) 

Service WMS

Ajouter une nouvelle fonction (différente de la précédente) qui va vous permettre d’ajouter une nouvelle source de raster

1 - déclarer votre fonction

2 - votre fonction doit ajouter une source **raster **(map.addSource(configuration))  ([doc](https://maplibre.org/maplibre-gl-js-docs/api/sources/))

3 - votre source doit pointer vers un WMS servi par Geoserver voir explication données pendant le cours pour obtenir facilement l’url , sinon : ex 

![](https://lh6.googleusercontent.com/Zr6u9H5GyjAa8umV6h5JdzQtVz2w_Och4a_QTReTDjGDBTgWseMwD4mTOLN4QP1P5GsREQrQfZbhMqLrMABeJpKYxnXGf_TmZQFyONF4cDo9kQXl-eR6bJruIOPlGBFchP1mlkUtsq5ZBbMUsJDCYa0)

Assurez vous que vous avez bien 2 fonctions javascript qui écoute vos boutons avec vos nouveaux identifiant (comme dans le Lab6)

Assurez-vous que vos fonctions javascript déclenchent bien les bonnes fonctions.

Maintenant lancez votre fichier HTML local Lab7.html

![](https://lh6.googleusercontent.com/_JyTQxic-2suTZJ06kSLHRUx_yHstPptNp0JpFxwziIi2PAlFJkPg-bxF2lT1ITwxLTio1CtUTWsOqEXccpM37Jtm0TXZNkxjGQ2vnpGb0U1CgvSkCktU49gp4r59n0Xz8osILffjeEGLyPZ8DB1koo)

Lorsque vous cliquez sur le bouton WMS cela devrait charger l’image aérienne

Lorsque vous cliquez sur le bouton WFS cela devrait charger le WFS en format GeoJSON

![](https://lh6.googleusercontent.com/VGU8dy1DHFqUOe82N4A0tSOEYruK5uOVbjAUWtC7MfjhUSf5dlRXYRuuaALnnX1nBgLUeIqfXo0VF4fF3vOM18nvc3sqbUtcJrfFJfPvj110SQxe5p1n-Xg82aovMJbih68jGojcw9Q6L-Qxs9PxY-k)
