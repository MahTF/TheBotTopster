import { client } from '../config';
import { getPokemonByName, getRandomPokemon } from '../utils/getPokemonFuncion';
import { PokeInfo } from '../utils/PokeInfo';

const PkmDadosCommand = client.on('message', (channel, tags, message, self) => {
  if (self) {
    return;
  }

  if (message.toLowerCase().includes('!pkm')) {
    const apostrofo = message.replace('\'', '’');
    const pokemonNaMensagem = apostrofo.toLowerCase().replace("!pkm", '').trim();

    try {
      const pokemon = getPokemonByName(pokemonNaMensagem);
      PokeInfo(channel, pokemon);
    } catch {
      const pokemonAleatorio = getRandomPokemon();
      client.say(channel, `🤖: Me desculpe @${tags.username}, mas não consegui achar '${pokemonNaMensagem}', tente usar !Pkm ${pokemonAleatorio.Name}`);
    }
  }
});

export { PkmDadosCommand };
