'use strict';

let Santa = require('./santa_class.js');

let sweden = {
	latitude:67.498454,
	longitude:21.040181
};

let mySanta = new Santa(sweden);


const express = require('express');
const socketIO = require('socket.io');
const riveScript = require('rivescript');

const PORT = process.env.PORT || 3000;
const INDEX = '/main_app_page.html';

const server = express()
	.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));


const io = socketIO(server);


io.on('connection', (socket) => {
	console.log('Client connected');
	socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval( () => io.emit('santa', JSON.stringify(mySanta.getPosition())), 1000);



var bot = new RiveScript();

// Load an individual file.
bot.loadFile("brain/myself.rive").then(loading_done).catch(loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
	console.log("Bot has finished loading!");

	// Now the replies must be sorted!
	bot.sortReplies();

	// And now we're free to get a reply from the brain!

	// RiveScript remembers user data by their username and can tell
	// multiple users apart.
	let username = "local-user";

	// NOTE: the API has changed in v2.0.0 and returns a Promise now.
	bot.reply(username, "Hello, bot!").then(function(reply) {
		console.log("The bot says: " + reply);
	});


	io.on('messageSanta', (data) => {
		console.log(data);
	});


}

// It's good to catch errors too!
function loading_error(error, filename, lineno) {
	console.log("Error when loading files: " + error);
}



















