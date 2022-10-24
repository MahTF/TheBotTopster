import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 30 de Outubro de 2022 19:00 GMT-3
 * Missão 1: Capturar 05 pokémons de grama para um Bulbassauro, pokémon de grama / Venenoso
 * Missão 2: Trocar 8 pokémons do tipo sombrio para um Persian Sombrio
 * Missão 3: Trocar 8 pokémons do tipo fantasma para um Marowak Fantasma
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 9, 30, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("grama")) {
      if (pokemon.Tipo.toLowerCase().includes("sombrio") || pokemon.Tipo.toLowerCase().includes("fantasma")) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Grama e o tipo Sombrio ou Fantasma, capture e troque (08) para ganhar 01 Pokemon.`
        );
      }
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Grama, capture (05) para ganhar 01 Bulbassauro. Pokémon tipo Grama / Venenoso`
      );
    } else if (pokemon.Tipo.toLowerCase().includes("sombrio"))
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Sombrio, capture e troque-o (08) para ganhar 01 Persian Sombrio.`
      );

    if (pokemon.Tipo.toLowerCase().includes("fantasma")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fantasma, capture e troque-o (08) para ganhar 01 Marowak Fantasma.`
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
