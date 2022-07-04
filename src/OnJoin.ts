import { client } from "./config";

const OnJoin = client.once('join', () => {
  console.log(new Date());

  setTimeout(() => {
    const channels = client.getChannels();
    channels.forEach(channel => {
      client.action(channel, 'Fui reiniciado e agora serei mais top do que sempre fui!');
    })
  }, 60000);
});

export { OnJoin };
