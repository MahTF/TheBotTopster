import { client } from '../config';

let UserSaid = false;
const secondInMs = 1000;
const minuteInMs = secondInMs * 60;
const userToVerify = "ManukiTanuki";

const TaTopCommand = client.on('message', (channel, tags) => {
  if (
    tags.username === userToVerify.toLowerCase() &&
    UserSaid == false
  ) {
    if (channel === "#manukitanuki") {
      client.say(channel, '!manu');
    } else {
      client.say(channel, '!tatop');
    }
    UserSaid = true;

    setTimeout(() => {
      client.say(channel, `Alguém viu o @${userToVerify} por aí? Quero um papo topster com ele`);
      UserSaid = false;
    }, (minuteInMs * 30));
  }
});

export { TaTopCommand };