var PORT = process.env.PORT || 3000;
var express =require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var now = moment();

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('User connected via scoket.io!');

	socket.on('message', function (message) {
		var timestamp = (now.valueOf()); 
		var timestampMoment = moment.utc(timestamp);
		var formattedTimestamp = (timestampMoment.format('h:mm a'));

		console.log('Message recieved: ' + message.text + ' @ ' + formattedTimestamp);
	
		//socket.broadcast.emit('message', message);
		io.emit('message', message + formattedTimestamp);
	});

	socket.emit('message', {
		text: 'Welcome to chat application'
	});
});


http.listen(PORT, function(){
	console.log('server started!');
});
