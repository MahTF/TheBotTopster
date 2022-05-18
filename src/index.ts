import { client } from "./config";

client.connect();

client.on('message', (channel, tags, message, self) => {
  // ignorar as proprias mensagens
  if (self) return;

  if (message.toLowerCase().includes("oi")) {
    client.say(channel, `Olá @${tags.username}`);
  }
});
