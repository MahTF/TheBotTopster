import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 11 de Dezembro de 2022 19:00 GMT-3
 * Missão 1: Troque 04 pokémons com status base abaixo de 300 para 01 Scrafty. Pokémon Sombrio / Lutador
 * Missão 2: Pegue 04 pokémons eletricos para ganhar 03 Repeat Ball
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 11, 11, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;
  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (statusBaseInNumber <= 300) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui ${statusBaseInNumber} de status base, capture e troque (04) para ganhar 01 Scrafty. Pokémon Sombrio / Lutador`
      );
    }
  } else {
    client.action(
      channel,
      "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity"
    );
  }
}

export { PokemonMissions };
