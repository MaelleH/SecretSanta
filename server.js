'use strict';

let Santa = require('./santa_class.js'); //On récupère la class santa

let sweden = { //Les coordonnées de la suède où sera placé santa
	latitude:67.498454,
	longitude:21.040181
};

let mySanta = new Santa(sweden); //On place santa en suède


const express = require('express'); //On exporte les librairies
const socketIO = require('socket.io');
const riveScript = require('rivescript');

const PORT = process.env.PORT || 3000; //On choisi le port pour le serveur
const INDEX = '/main_app_page.html'; //On défini la page pricnipale de l'application

const server = express()
	.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
	.listen(PORT, () => console.log(`Listening on ${PORT}`)); //Définition du serveur à l'écoute sur le bon port


const io = socketIO(server);


io.on('connection', (socket) => { //Ajout d'un socket pour écouter la connexion
	console.log('Client connected');
	socket.on('messageSanta', (data) => { //Ajout d'une écoute lorsqu'on reçoit un message santa
		bot.reply("pseudo", data).then(function(reply) { //On répond lorsqu'on a reçu les information du bot
			io.emit('messageSantaReply', reply); //Emission de la réponse
		});

	});
	socket.on('disconnect', () => console.log('Client disconnected')); //On se déconnecte quand le client s'en va
});


setInterval( () => io.emit('santa', JSON.stringify(mySanta.getPosition())), 3000); //Socket pour emettre toutes les 3 secondes la position de santa

var bot = new riveScript();
bot.loadFile("brain/myself.rive").then(loading_done).catch(loading_error); //Téléchargement du fichier du bot

function loading_done() {  //Lorsque le bot est pret
	bot.sortReplies();
}

// It's good to catch errors too!
function loading_error(error, filename, lineno) { //Si il y a une erreur dans le chargement
	console.log("Error when loading files: " + error);
}





















