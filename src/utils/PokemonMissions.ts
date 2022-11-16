import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 20 de Novembro de 2022 19:00 GMT-3
 * Missão 1: Trocar 5 pokémons do tipo fogo para um Torchic, tipo de fogo
 * Missão 2: Capturar 5 pokémons lutadores para 02 IV Reset
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 10, 20, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("fogo")) {
      if (pokemon.Tipo.toLowerCase().includes("lutador")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fogo e o tipo Lutador, capture e troque (05) para ganhar 01 Pokemon e um item.`
        );
      }
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fogo, capture e troque-o (05) para ganhar 01 Torchic, Pokémon tipo Fogo`
      );
    } else if (pokemon.Tipo.toLowerCase().includes("dragão"))
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Lutador, capture-o (05) para ganhar 02 IV Reset.`
      );
  } else {
    client.action(
      channel,
      "VoHiYo Possívelmente ainda não tenhos as missões novas. BibleThump Logo logo receberei uma nova atualização com elas! TwitchUnity"
    );
  }
}

export { PokemonMissions };
