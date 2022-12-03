import { client } from './config';
import { OnJoin } from './OnJoin';
import { TopCommand } from './commands/TopCommand';
import { SpawnCommand } from './commands/SpawnCommand';
import { TaTopCommand } from './commands/TaTopCommand';
import { PkmDadosCommand } from './commands/PkmDadosCommand';

client.connect();

// Soltar uma frase de reinicio após entrar nos canais.
OnJoin;

// Chamando os comandos para poderem ser executados
TopCommand;
SpawnCommand;
TaTopCommand;
PkmDadosCommand;