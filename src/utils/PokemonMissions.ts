import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 06 de Novembro de 2022 19:00 GMT-3
 * Missão 1: Capturar 06 pokémons de metal para um Total Reset
 * Missão 2: Trocar 8 pokémons do tipo dragão para um Totodile, tipo de água
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 10, 6, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("metal")) {
      if (pokemon.Tipo.toLowerCase().includes("dragão")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Metal e o tipo Dragão, capture e troque (08) para ganhar 01 Pokemon e um item.`
        );
      }
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Metal, capture (06) para ganhar 01 Total Reset`
      );
    } else if (pokemon.Tipo.toLowerCase().includes("dragão"))
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Dragão, capture e troque-o (08) para ganhar 01 Totodile. Pokémon tipo de água.`
      );
  } else {
    client.action(
      channel,
      "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity"
    );
  }
}

export { PokemonMissions };
