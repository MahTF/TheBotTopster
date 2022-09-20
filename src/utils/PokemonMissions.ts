import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 25 de Setembro de 2022 19:00 GMT-3
 * Missão 1: Pegar 1 pokémon com status base menor ou igual a 210 por um Porygon-Z Tipo normal 
 * Missão 2: Pegar 5 voadores para ganhar um Rowlet Tipo Grama / Voador
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 8, 25, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("voador")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Voador, capture (05) para ganhar 01 Rowlet. Pokémon tipo Grama/Voador`
      );

      if (pokemon.Tipo.toLowerCase().includes("voador") && statusBaseInNumber <= 210) {
        client.action(
          channel,
          `${pokemon.Name} é possivelmente um pokemon que está nas duas missões. É, ou possívelmente é, Normal e com Status base de ${statusBaseInNumber}.`
        );
      }
    }

    if (statusBaseInNumber <= 210) {
      client.action(
        channel,
        `${pokemon.Name} possui o status base de ${statusBaseInNumber}. capture-o para ganhar um Porygon-Z! Pokemon tipo Normal`
      );
    }
  } else {
    client.action(channel, "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity")
  }
}

export { PokemonMissions };
