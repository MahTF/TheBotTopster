import { client } from './config';
import { TopCommand } from './commands/TopCommand';
import { SpawnCommand } from './commands/SpawnCommand';

client.connect();

client.on('join', (channel) => {
  client.say(
    channel,
    'Licencinha, to chegando pra deixar aqui bem mais topster! Provavelmente sofri uma atualização! (Ou o servidor caiu, shiu!)'
  );
});

// Chamando os comandos para poderem ser executados
TopCommand;
SpawnCommand;
