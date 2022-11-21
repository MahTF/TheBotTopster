import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 27 de Novembro de 2022 19:00 GMT-3
 * Missão 1: Capturar 5 pokémons sombrios para 01 Total Reset
 * Missão 2: Trocar 7 pokémons água para 01 Sobble. Pokémon tipo água
 * Missão 3: Tentar 30 capturas para 03 Repeat Ball
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 10, 27, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("sombrio")) {
      if (pokemon.Tipo.toLowerCase().includes("água")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Sombrio e o tipo Água, capture e troque (07) para ganhar 01 Pokemon e um item.`
        );
      }
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Sombrio, capture-o (05) para ganhar 01 Total Reset.`
      );
    } else if (pokemon.Tipo.toLowerCase().includes("água"))
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Água, capture e troque-o (07) para ganhar 01 Sobble. Pokémon tipo Água.`
      ); else {
      client.action(
        channel,
        `Existe uma missão de tentar 30 capturas para ganhar 03 Repeat Balls!`
      )
    }
  } else {
    client.action(
      channel,
      "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity"
    );
  }
}

export { PokemonMissions };
