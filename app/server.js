var port = 1335,
express = require('express'),
twilio = require('twilio');
client = new twilio('ACccb3bb1e3c453eade2a7f19296523251', 'c6468f1e33e8aabb06d09a2b235e1908');



// server.listen(3000);
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app),
io = require('socket.io')(http);
// var game=io.listen(app);
app.get('/test', function(req, res){
	client.messages.create({
  to: '+13179799311',
  from: '+13177076361',
  body: 'I need help!'
});
    //res.sendFile(__dirname + '/index.html');

});

app.get('/test911', function(req, res){
  client.messages.create({
  to: '+13179799311',
  from: '+13177076361',
  body: 'call 911!'
});
    //res.sendFile(__dirname + '/index.html');

});

 app.get('/audio', function(req, res){
// Send the text message.
client.calls.create({
	url:"https://f4444aa6.ngrok.io",
  to: '+13179799311',
  from: '+13177076361'
  
});
   // res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket){
// 	client.messages.create({
//   to: '+13179799311',
//   from: '+13177076361',
//   body: 'Hello from Twilio!'

// });
    console.log('a user connected');
});



http.listen(port, function(){
    console.log("Node server listening on port " + port);
});


// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { 
// 	client.messages.create({
//   to: '+13179799311',
//   from: '+13177076361',
//   body: 'Hello from Twilio!'

// });

//   });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(3000);
// app = express().use(express.static(__dirname + '/')),
// http = require('http').Server(app),
// io = require('socket.io')(http);
// var game=io.listen(app);
// app.get('/test', function(req, res){
// 	client.messages.create({
//   to: '+13179799311',
//   from: '+13177076361',
//   body: 'Hello from Twilio!'
// });
    //res.sendFile(__dirname + '/index.html');

// });

// game.sockets.on('connection', function(socket){
// 	client.messages.create({
//   to: '+13179799311',
//   from: '+13177076361',
//   body: 'Hello from Twilio!'

// });
//     console.log('a user connected');
// });



// http.listen(port, function(){
//     console.log("Node server listening on port " + port);
// });

// var http = require('http');
// var io = require('socket.io');
// var port = 8080;

// // Start the server at port 8080
// var server = http.createServer(function(req, res){ 
//     // Send HTML headers and message
//     res.writeHead(200,{ 'Content-Type': 'text/html' }); 
//     res.end('<h1>Hello Socket Lover!</h1>');
// });

// server.listen(port);

// // Create a Socket.IO instance, passing it our server
// var socket = io.listen(server);

// // Add a connect listener
// socket.on('connection', function(client){ 
//     console.log('Connection to client established');

//     // Success!  Now listen to messages to be received
//     client.on('message',function(event){ 
//         console.log('Received message from client!',event);
//     });

//     client.on('disconnect',function(){
//         clearInterval(interval);
//         console.log('Server has disconnected');
//     });
// });

// console.log('Server running at http://127.0.0.1:' + port + '/');