'use strict';

let Santa = require('./santa_class.js');

let sweden = {	
		latitude:67.498454,
		longitude:21.040181
	};

let mySanta = new Santa(sweden);
const PORT = process.env.PORT || 3000;
const INDEX = '/main_app_page.html';


const express = require('express');
const riveScript = require('rivescript');

const server = express()
	.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));


const io = require('socket.io')(server, {
	handlePreflightRequest: function (req, res) {
		var headers = {
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Credentials': true
		};
		res.writeHead(200, headers);
		res.end();
	}
});





io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval( () => io.emit('time', new Date().toTimeString()), 1000);

setInterval( () => io.emit('santa', JSON.stringify(mySanta.getPosition())), 1000);

