'use strict';

const config = require('config');
const Cleverbot = require('cleverbot-node');

const cleverbot = new Cleverbot;
cleverbot.configure({botapi: config.get('cleverbot_token')});

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(config.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

// Web UI
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    console.log('Message: ' + text);

    // Get a reply from Cleverbot
    cleverbot.write(text, function(response){
      console.log('Bot reply: ' + response.output);
      socket.emit('bot reply', response.output);
    });

  });
});
