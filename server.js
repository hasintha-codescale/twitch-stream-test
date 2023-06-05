// File: server.js

const express = require('express');
const authenticateWithTwitch = require('./twitchAuth');
const getStreamerInfo = require('./twitchAPI');
const streamingServer = require('./streamingServer');

const app = express();

// Add your routes and logic here

const port = 3000; // Choose a suitable port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Example usage
authenticateWithTwitch();
getStreamerInfo('streamerName', 'accessToken');
streamingServer();
