import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 02 de Outubro de 2022 19:00 GMT-3
 * Missão 1: Troque 5 pokemon de metal para ganhar um Noivern Tipo Voador / Dragão
 * Missão 2: Pegue pokemon pesado, na pokedex, não tem peso ainda.
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 9, 2, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("Metal")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Metal, capture (05) e troque-o para ganhar 01 Noivern. Pokémon tipo Voador / Dragão`
      );
    }
  } else {
    client.action(channel, "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity")
  }
}

export { PokemonMissions };
