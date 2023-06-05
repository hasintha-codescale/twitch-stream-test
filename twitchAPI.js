// File: twitchAPI.js

const axios = require('axios');

const clientId = 'e4i8mbqanrtfbanvev4o1vzzooaj88';

const getStreamerInfo = async (streamerName, accessToken) => {
  try {
    const response = await axios.get(
      `https://api.twitch.tv/helix/users?login=${streamerName}`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    const streamerData = response.data.data[0];
    // Use the streamer's data as needed
  } catch (error) {
    console.error('Failed to fetch streamer info:', error);
  }
};

module.exports = getStreamerInfo;

