import { client } from "./config";
import { TopReplies } from './utils/TopReplies';

const TopRepliesLength = TopReplies.length;

client.connect();

client.on('message', (channel, tags, message, self) => {
  // ignorar as proprias mensagens e ignora mensagens de respostas
  if (self
    || message.toLowerCase().startsWith(process.env.NODE_TWITCH_USERNAME as string)
    || message.toLowerCase().startsWith(`@${process.env.NODE_TWITCH_USERNAME as string}`)
  ) return;

  //#region Comando: TOP
  // Caso a mensagem tenha "top" nela, o bot responderá
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
  //#endregion

  //#region Comando !spawn
  /// Este comando serve para resgatar um som na live de Gata_amaldicoada quando um user digita uma mensagem Específica
  if (
    channel === "#gata_amaldicoada" &&
    tags.username === "PokemonCommunityGame" &&
    message.toLowerCase().includes("tente capturar usando !pokecatch")
  ) {
    client.say(channel, "!spawn");
  }
  //#endregion
});
