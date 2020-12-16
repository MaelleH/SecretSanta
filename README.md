# SecretSanta

Ce site consiste au repèrage de santa sur une carte et à une discussion avec lui via un bot.


Le site est consitué de 4 fichiers principaux : 
 - main_app_page.html qui contient le client web (les scripts js et l'html)
 - server.js qui contient le code du serveur (Les scripts permettant d'intérargir avec le client ainsi que la gestion du bot de discussion)
 - santa_class.js qui gère la génération aléatoires des coordonnées de santa 
 - package.json qui contient les dépendances nécessaires au bon fonctionnement de l'application
 
Sur le client, vous trouverez la carte à gauche et le chat à droite.
 
 Pour discuter avec le bot, plusieurs interactions sont disponibles :
  - what is your name
  - who are you
  - who is this
  - can i have (*) for christmas
  - how old are you
  - santa
  - where are you
  - where are you from
  - where do you live
  - what is your occupation
  - what do you do
  - who is your master
  - Autre chose => Il dira : I didn't get that, try to ask me something for christmas

Le client et le serveur sont disponibles à l'adresse suivante : https://secret-santa-123.herokuapp.com/
Le git est disponible à l'adresse suivante : https://github.com/MaelleH/SecretSanta