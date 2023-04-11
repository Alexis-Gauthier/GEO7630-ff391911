## Changer de répertoire de travail
git clone https://github.com/Captain-Oski/geo7630.git
cd geo7630
## Configurer Git avec vos credentials personnels
git config --global user.email "mettrecourrielusagerici" &&
git config --global user.name "mettrenomusagerici" &&
## Créer un fichier README
echo "# geo7630" >> README.md &&
## Initiatlise le répertoire pour git
git init &&
## Ajoute le fichier README au dépot git
git add README.md &&
## Commit le fichier au dépot
git commit -m "first commit" &&
## Créer une branche
git branch -M develop &&
git remote add origin https://github.com/Captain-Oski/geo7630.git &&
git push -u origin develop