// File: twitchAuth.js

const axios = require('axios');

const clientId = 'e4i8mbqanrtfbanvev4o1vzzooaj88';
const clientSecret = 'b80zo23m3lq0couevbko1f5kgsglni';

const authenticateWithTwitch = async () => {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials'
        }
      }
    );
    const accessToken = response.data.access_token;
    // Use the access token to make API requests
  } catch (error) {
    console.error('Failed to authenticate with Twitch:', error);
  }
};

module.exports = authenticateWithTwitch;