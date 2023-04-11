## Installation des Virtual Box Guest Additions (full screen, copier coller etc...)

    sudo apt install virtualbox-guest-utils virtualbox-guest-dkms -y &&
    sudo apt install git -y

## Installation de FME

    ### Once inside the container 
    sudo apt-get update &&
    sudo apt install gdebi-core -y &&
    wget https://downloads.safe.com/fme/2021/fme-desktop-2021_2021.2.6.21821~ubuntu.20.04_amd64.deb &&
    sudo gdebi fme-desktop-2021_2021.2.6.21821~ubuntu.20.04_amd64.deb &&

## Installation de VS Code
    ### Installation des dépendances
    sudo apt-get install wget gpg -y &&
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg  &&
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg  /etc/apt/keyrings/packages.microsoft.gpg &&
    sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list' &&
    rm -f packages.microsoft.gpg &&
    sudo apt install apt-transport-https -y &&
    sudo apt update -y &&
    ### Installation de VS Code
    sudo apt install code -y &&
## Installation de Docker
    sudo apt-get install curl &&
    curl -fsSL https://get.docker.com -o get-docker.sh &&
    sudo sh get-docker.sh &&
    sudo usermod -a -G docker $USER &&

### Installation de Docker compose
s	udo apt-get install docker-compose-plugin -y &&

### Installation de DBeaver
	sudo apt update -y &&
	sudo apt -y install default-jdk &&
	curl -fsSL https://dbeaver.io/debs/dbeaver.gpg.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/dbeaver.gpg &&
	echo "deb https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list &&
	sudo apt update -y &&
	sudo apt install dbeaver-ce -y &&

## Installation de QGIS
	sudo apt install gnupg software-properties-common &&
	sudo mkdir -m755 -p /etc/apt/keyrings &&
	sudo wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg &&
	sudo echo "Types: deb deb-src URIs: https://qgis.org/debian Suites: your-distributions-codename Architectures: amd64 Components: main Signed-By: /etc/apt/keyrings/qgis-archive-keyring.gpg" > /etc/apt/sources.list.d/qgis.sources &&
	sudo apt update &&
	sudo apt install qgis qgis-plugin-grass

	
### Fin de l'installation des dépendances et outils systèmes
