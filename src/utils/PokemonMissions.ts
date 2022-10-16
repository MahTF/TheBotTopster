import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 23 de Outubro de 2022 19:00 GMT-3
 * Missão 1: Trocar 07 pokémons de voador, para um Fennekin, pokémon de Fogo
 * Missão 2: Tentar 30 capturas para ganhar 03 TimerBalls
 * Missão 3: Pegar 10 pokémons do tipo normal para 01 Mood Mint
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 9, 23, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("voador")) {
      if (!pokemon.Tipo.toLowerCase().includes("normal")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Voador, capture e troque-o (07) para ganhar 01 Fennekin. Pokémon tipo Fogo`
        );
      }
      if (pokemon.Tipo.toLowerCase().includes("normal")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que pode estar em duas missões!`
        );
      }
    } else if (pokemon.Tipo.toLowerCase().includes("normal") &&
      !pokemon.Tipo.toLowerCase().includes("voador")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Normal, capture (10) para ganhar 01 Mood Mint.`
      );
    }
    else {
      client.action(
        channel,
        'Atenção, tem missão de tentar 30 vezes capturar pokémons para ganhar 03 Timer Balls!'
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
