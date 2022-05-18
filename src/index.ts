import { client } from "./config";
import { TopReplies } from './utils/TopReplies';

const TopRepliesLength = TopReplies.length;

client.connect();

client.on('message', (channel, tags, message, self) => {
  // ignorar as proprias mensagens
  if (self) return;

  // Caso a mensagem tenha "top" nela, o bot responderá
  if (message.toLowerCase().includes("top")) {
    let index = Math.random() * TopRepliesLength;
    index = Math.round(index);

    if (index >= TopRepliesLength) {
      index = index - 1;
    }

    let reply = TopReplies[index];
    if (reply.includes('@nome')) {
      reply = reply.replace('@nome', `@${tags.username}`);
    }

    try {
      client.say(
        channel,
        reply
      );
    } catch (err) {
      console.log(err);
    }
  }
});
