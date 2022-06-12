import { client } from '../config';
import { TopReplies } from '../utils/TopReplies';

const TopRepliesLength = TopReplies.length;

const TopCommand = client.on('message', (channel, tags, message, self) => {
  // ignorar as proprias mensagens e ignora mensagens de respostas
  if (self
    || message.toLowerCase().startsWith(process.env.NODE_TWITCH_USERNAME as string)
    || message.toLowerCase().startsWith(`@${process.env.NODE_TWITCH_USERNAME as string}`)
  ) return;

  // Caso a mensagem tenha "top" ou "t0p" nela, o bot responderá
  if (
    message.toLowerCase().includes("top") ||
    message.toLowerCase().includes("t0p")
  ) {
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

export { TopCommand };
