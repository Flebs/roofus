//How to make a meme server courtesy of RhymBil

var express = require("express"); 
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
//setting the required variables

memers = []; //users array
memeConnections = []; //connections array

server.listen(process.env.PORT || 2020);  // It will run on localhost:(any number)
console.log("Meme Server Is Up");

app.get("/", function(req, res){

	res.sendFile(__dirname + "/memeChattut.html"); //links to html file CHANGE /index.html to you actually html file
	
});
	

io.sockets.on("connection", function(socket){
	//connection stuff
	memeConnections.push(socket);	
				io.sockets.emit("new memer"); //checks if anyone is online

	console.log("Memers connected: %s", memeConnections.length);
	

	
	
	// disconnection stuff
	socket.on("disconnect", function(data){
		
		memers.splice(memers.indexOf(socket.username), 1); //accessing the array memers
		
						io.sockets.emit("memer left"); //checks if memer left

	memeConnections.splice(memeConnections.indexOf(socket),1);
	console.log("Memers disconnected: %s ", memeConnections.length);
	});
	
	//send dem meme messages
	socket.on("send meme message", function(data){ 
		console.log(data);// shows what the memers typed in console
		io.sockets.emit("new meme message", {msg: data});
	
	
	});



	});
