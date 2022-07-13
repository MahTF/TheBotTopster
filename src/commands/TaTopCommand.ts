import { client } from '../config';

let UserSaid = false;
const secondInMs = 1000;
const minuteInMs = secondInMs * 60;
const hourInMs = minuteInMs * 60;
const userToVerify = "ManukiTanuki";

const TaTopCommand = client.on('message', (channel, tags) => {
  if (
    channel === "#ricky_cezar" &&
    tags.username === userToVerify.toLowerCase() &&
    UserSaid == false
  ) {
    client.say(channel, '!tatop');
    UserSaid = true;

    setTimeout(() => {
      client.say(channel, `Alguém viu o @${userToVerify} por aí? Quero um papo topster com ele`);
      UserSaid = false;
    }, hourInMs);
  }
})

export { TaTopCommand };