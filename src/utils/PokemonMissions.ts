import { client } from '../config';

type Pokemon = {
  Name: string;
  Geracao: string;
  No: string;
  Tipo: string;
  Regiao: string;
  NomeOriginal: string;
  StatusBase: string;
}

/* Missão Semanal
 * Data final: Domingo, 21 de Agosto de 2022 00:00 GMT -3
 * Missão 1: Pegar pokémons do tipo Dragão para obter um Dragonite
 * Missões adicionais não estão com tipo/estado do pokémon
 */

function PokemonMissions(channel: string, pokemon: Pokemon) {
  const deadLine = new Date(2022, 8, 28, 19);
  const DateNow = new Date();

  if (deadLine > DateNow) {
    if (pokemon.Tipo.toLowerCase().includes("dragão")) {
      client.say(channel, `${pokemon.Name} é um Pokémon do tipo Dragão, capture-o para conseguir seu Dragonite!`);
    }
  }
}

export { PokemonMissions };
