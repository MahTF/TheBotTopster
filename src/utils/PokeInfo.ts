import { client } from '../config';

import { IPokemon } from './IPokemon';

function PokeInfo(channel: string, pokemon: IPokemon) {
  const resposta = `${pokemon.No}: ${pokemon.Name}, (Nome original: ${pokemon.NomeOriginal}). Pokémon da ${pokemon.Geracao} geração, região de ${pokemon.Regiao}.
        Tem o(s) tipo(s) ${pokemon.Tipo} e a base de seus status é ${pokemon.StatusBase}`;
  client.say(channel, resposta);
}

export { PokeInfo };
