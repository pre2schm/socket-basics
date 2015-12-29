var PORT = process.env.PORT || 3000;
var express =require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');


app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('User connected via scoket.io!');

	socket.on('message', function (message) {
		
		console.log('Message recieved: ' + message.text);
		message.timestamp = moment().valueOf();
		//socket.broadcast.emit('message', message);
		io.emit('message', message);
	});

	socket.emit('message', {
		name: 'System',
		text: 'Welcome to chat application',
		timestamp: moment.valueOf()
	});
});


http.listen(PORT, function(){
	console.log('server started!');
});
