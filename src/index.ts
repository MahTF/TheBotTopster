import { client } from './config';
import { TopCommand } from './commands/TopCommand';
import { SpawnCommand } from './commands/SpawnCommand';

client.connect();

// Chamando os comandos para poderem ser executados
TopCommand;
SpawnCommand;
