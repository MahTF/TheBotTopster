import { client } from "./config";
import { TopReplies } from './utils/TopReplies';

const TopRepliesLength = TopReplies.length;

const OnJoin = client.once('join', () => {
  setTimeout(() => {
    const channels = client.getChannels();
    channels.forEach(channel => {
      client.action(
        channel,
        `Fui reiniciado e agora serei mais top do que sempre fui! Atualmente eu tenho ${TopRepliesLength} frases bem topzeras pra usar contigo!`
      );
    });
  }, 60000);
});

export { OnJoin };
