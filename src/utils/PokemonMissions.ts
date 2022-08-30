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
 * Data final: Domingo, 05 de Setembro de 2022 00:00 GMT
 * Missão 1: Trocar pokémons do tipo Inseto para ganhar 03 Net Balls
 * Missão 2: Pegar pokémons do tipo Lutador para ganhar 01 Empty Disk
 * Missões adicionais não estão com tipo/estado do pokémon
 */

function PokemonMissions(channel: string, pokemon: Pokemon) {
  const deadLine = new Date(2022, 9, 5);
  const DateNow = new Date();

  if (deadLine > DateNow) {
    if (pokemon.Tipo.toLowerCase().includes("inseto")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui ou pode possuir o tipo Inseto, capture-o e troque-o para ganhar 03 Net Balls!`
      );

      if (pokemon.Tipo.toLowerCase().includes("lutador")) {
        client.action(
          channel,
          `${pokemon.Name} é possivelmente um pokemon que está nas duas missões. É lutador e inseto.`
        )
      }
    }

    if (pokemon.Tipo.toLowerCase().includes("lutador")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui ou pode possuir o tipo Lutador, capture-o para adiquirir 01 Empty Disk!`
      );
    }
  }
}

export { PokemonMissions };
