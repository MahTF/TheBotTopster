import 'dotenv/config';
import config from 'tmi.js';

const client = config.client({
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: process.env.NODE_TWITCH_USERNAME,
    password: process.env.NODE_TWITCH_PASSWORD
  },
  channels: [
    'MahTF',
    'manukitanuki',
    'gata_amaldicoada',
    'ricky_cezar',
    'toroma_hiuga',
    'Projet1504',
    'Fabits04'
  ]
});

export { client };
