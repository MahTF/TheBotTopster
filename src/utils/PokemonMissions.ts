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
 * Data final: Domingo, 11 de Setembro de 2022 19:00 GMT-3
 * Missão 1: Trocar pokémons do tipo Psiquico para ganhar um Espeon.
 * Missão 2: Pegar pokémons do tipo Venenoso para ganhar 03 Cipher Ball.
 * Missão 3, Evento: Trocar pokémons com 500 ou mais de base status para ganhar 01 Beast Ball.
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

function PokemonMissions(channel: string, pokemon: Pokemon | undefined) {
  const deadLine = new Date(2022, 9, 11, 19);
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;
  console.log(
    `Data atual: ${DateNow},
    Deadline: ${deadLine}.
    A condição está ${ValidTime}`
  );

  if (!pokemon) {
    return;
  }

  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("psiquico")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Psiquico, capture-o e troque-o para ganhar um Espeon!`
      );

      if (pokemon.Tipo.toLowerCase().includes("venenoso") && statusBaseInNumber < 500) {
        client.action(
          channel,
          `${pokemon.Name} é possivelmente um pokemon que está nas duas missões. É, ou possívelmente é, Psiquico e venenoso.`
        );

        if (statusBaseInNumber >= 500) {
          client.action(
            channel,
            `É possível que ${pokemon.Name} esteja nas três missões. É, ou possívelmente é, Psiquico, venenoso e com status base de ${statusBaseInNumber}.`
          );
        }
      }
    }

    if (pokemon.Tipo.toLowerCase().includes("venenoso")) {
      client.action(
        channel,
        `${pokemon.Name} é um Pokémon que possui, ou pode possuir, o tipo Venenoso, capture-o para adiquirir 03 Cipher Ball!`
      );

      if (statusBaseInNumber >= 500) {
        client.action(
          channel,
          `É possível que ${pokemon.Name} esteja nas duas missões. É, ou possívelmente é, Venenoso e com status base de ${statusBaseInNumber}.`
        );
      }
    }

    if (statusBaseInNumber >= 500) {
      client.action(
        channel,
        `${pokemon.Name} possui o status base de ${statusBaseInNumber}. capture-o e troque-o para ganhar um Beast Ball! `
      );
    }
  }
}

export { PokemonMissions };
