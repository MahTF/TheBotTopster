import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 18 de Setembro de 2022 19:00 GMT-3
 * Missão 1: Pegar 7 pokemons normal para ganhar Mood Mint
 * Missão 2: Trocar pokémons com 500 ou mais de base status para ganhar 01 Flygon.
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

function PokemonMissions(channel: string, pokemon: IPokemon) {
  // Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
  const deadLine = new Date(2022, 8, 18, 19);
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("normal")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Normal, capture (07) para ganhar 01 Mood Mint!`
      );

      if (pokemon.Tipo.toLowerCase().includes("normal") && statusBaseInNumber >= 500) {
        client.action(
          channel,
          `${pokemon.Name} é possivelmente um pokemon que está nas duas missões. É, ou possívelmente é, Normal e com Status base de ${statusBaseInNumber}.`
        );
      }
    }

    if (statusBaseInNumber >= 500) {
      client.action(
        channel,
        `${pokemon.Name} possui o status base de ${statusBaseInNumber}. capture-o (02) e troque-o para ganhar um Flygon! Pokemon tipo Terra/Dragão`
      );
    }
  } else {
    client.action(channel, `VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity `)
  }
}

export { PokemonMissions };
