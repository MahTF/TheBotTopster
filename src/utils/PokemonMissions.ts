import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 09 de Outubro de 2022 19:00 GMT-3
 * Missão 1: Pegue 05 pokémons do tipo de Fogo para obter um Cyndaquil, pokémon de fogo
 * Missão 2: Tente capturar 30 pokémons para um Sawsbuck, pokémon Normal / Grama
 * Missão 3: Troque 09 pokémons tipo Fada para um Sylveon, pokémon Fada
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 9, 9, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("fogo")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fogo, capture (05) para ganhar 01 Cyndaquil. Pokémon tipo Fogo`
      );
      if (pokemon.Tipo.toLowerCase().includes("fada")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que pode estar em duas missões!`
        )
      }
    } if (pokemon.Tipo.toLowerCase().includes("fada") &&
      !pokemon.Tipo.toLowerCase().includes("fogo")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fada, capture e troque-o (09) para ganhar 01 Sylveon. Pokémon tipo Fada`
      );
    }
    else {
      client.action(
        channel,
        'Atenção, tem missão de tentar capturar 30 pokémons e capturar pokemon pesado!'
      );
    }
  } else {
    client.action(channel, "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity")
  }
}

export { PokemonMissions };
