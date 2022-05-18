import config from 'tmi.js';

const client = config.client({
  options: {
    debug: true
  },
  identity: {
    username: process.env.NODE_TWITCH_USERNAME,
    password: process.env.NODE_TWITCH_PASSWORD
  },
  channels: [
    'MahTF'
  ]
});

export { client };
