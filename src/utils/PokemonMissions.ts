import { client } from '../config';
import { IPokemon } from './IPokemon';

/* Missão Semanal
 * Data final: Domingo, 16 de Outubro de 2022 19:00 GMT-3
 * Missão 1: Trocar 07 pokémons de fogo, para um Chimchar, pokémon de Fogo
 * Missão 2: Pegar 05 pokémons com Great Ball para 02 Team enhancer
 * Missão 3: Pegar 04 pokémons com Status base igual ou superior a 500 para Darmanitan, pokémon Fogo ou Fogo e Psiquico ou Gelo ou Gelo e Fogo
 * Missões adicionais não estão com tipo/estado do pokémon.
 */

// Mês: Inicia no 0, Janeiro: 0, Fevereiro: 1, ...
const deadLine = new Date(2022, 9, 16, 19);

function PokemonMissions(channel: string, pokemon: IPokemon) {
  const DateNow = new Date();
  const ValidTime = deadLine >= DateNow;
  const statusBaseInNumber = Number(pokemon.StatusBase);

  if (ValidTime) {
    if (pokemon.Tipo.toLowerCase().includes("fogo")) {
      if (statusBaseInNumber < 500) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que possui (ou pode possuir) o tipo Fogo, capture e troque-o (07) para ganhar 01 Chimchar. Pokémon tipo Fogo`
        );
      }
      if (statusBaseInNumber >= 500) {
        client.action(
          channel,
          `${pokemon.Name} é um Pokémon que pode estar em duas missões!`
        );
      }
    } else if (statusBaseInNumber >= 500 &&
      !pokemon.Tipo.toLowerCase().includes("fogo")) {
      client.action(
        channel,
        `${pokemon.Name} tem sua base de status de ${statusBaseInNumber}, capture (04) para ganhar 01 Darmanitan. Pokémon tipo Fogo ou Fogo e Psiquico ou Gelo ou Gelo e Fogo`
      );
    }
    else {
      client.action(
        channel,
        'Atenção, tem missão de tentar capturar pokémons usando Great Balls!'
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
