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

io.on('messageSanta', (data) => {
	console.log(data);

	bot.reply("oui", "Hello, bot!").then(function(reply) {
		io.emit('santa', reply);
	});

});

setInterval( () => io.emit('santa', JSON.stringify(mySanta.getPosition())), 1000);



var bot = new riveScript();

// Load an individual file.
bot.loadFile("brain/myself.rive").then(loading_done).catch(loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
	console.log("Bot has finished loading!");
	bot.sortReplies();
}

// It's good to catch errors too!
function loading_error(error, filename, lineno) {
	console.log("Error when loading files: " + error);
}



















