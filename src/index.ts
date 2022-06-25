import { client } from './config';
import { TopCommand } from './commands/TopCommand';
import { SpawnCommand } from './commands/SpawnCommand';

client.connect();

client.once('join', (channel) =>
  client.say(channel, "Olá estou chegando aqui para deixar tudo topster! Provavelmente teve atualização do bot! TwitchGlitch"));

// Chamando os comandos para poderem ser executados
// TopCommand;
// SpawnCommand;
