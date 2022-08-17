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
 * Missão 1: Pegar pokémons com StatusBase menor ou igual a 300 para obter 03 Cherish Ball.
 * Missão 2: Pegar pokémons do tipo Fada para obter um Popplio
 */

function PokemonMissions(channel: string, pokemon: Pokemon) {
  const statusBaseNumber = parseInt(pokemon.StatusBase);
  const deadLine = new Date(2022, 8, 21, 19);
  const DateNow = new Date();

  if (deadLine > DateNow) {
    if (pokemon.Tipo.toLowerCase().includes("fada")) {
      if (statusBaseNumber <= 300) {
        client.say(channel, `${pokemon.Name} pertence as duas missões dessa semana, tente jogar a sua bola!`);
        return;
      }

      client.say(channel, `${pokemon.Name} é um Pokémon do tipo Fada, capture-o para conseguir seu Popplio!`);
    }

    if (statusBaseNumber <= 300 &&
      !pokemon.Tipo.toLowerCase().includes("fada")) {
      client.say(channel,
        `${pokemon.Name} tem seu base de status como ${statusBaseNumber}, jogue sua pokebola para tentar capturar e ganhar 03 Cherish Balls`)
    }
  }
}

export { PokemonMissions };
