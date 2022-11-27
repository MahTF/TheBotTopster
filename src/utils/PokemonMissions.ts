import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 04 de Dezembro de 2022 19:00 GMT-3
 * Missão 1: Troque 03 pokémons com status base aciama de 500 para 01 Litten. Pokémon de Fogo
 * Missão 2: Pegue 04 pokémons eletricos para ganhar 03 Repeat Ball
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 12, 4, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;
  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("elétrico")) {
      if (statusBaseInNumber >= 500) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Elétrico e tem ${statusBaseInNumber} de status base, capture e troque (04) para ganhar 01 Pokemon e um item.`
        );
      }
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Elétrico, capture e troque-o (04) para ganhar 03 Repeat Balls.`
      );
    } else if (statusBaseInNumber >= 500) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui ${statusBaseInNumber} de status base, capture-o (03) para ganhar 01 Litten. Pokémon de Fogo.`
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
