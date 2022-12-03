import { client } from '../config';
import { getPokemonByName } from '../utils/getPokemonFuncion';
import { PokemonMissions } from '../utils/PokemonMissions';
import { PokeInfo } from '../utils/PokeInfo';

const SpawnCommand = client.on('message', (channel, tags, message) => {
  if (
    tags.username === "pokemoncommunitygame" &&
    message.toLowerCase().includes("twitchlit")
  ) {
    client.say(channel, "!spawn");

    // Aqui vai falar um pouco sobre o pokemon
    // O bot sempre começa sua mensagem (em Português) com "TwitchLit Um PokemonNome". Removo o que não é necessário e passo para função
    const mensagemSemInicio = message.replace('TwitchLit Um ', '');
    const [pokemonNaMensagem,] = mensagemSemInicio.split(' selvagem');
    const pokemon = getPokemonByName(pokemonNaMensagem);

    if (pokemon) {
      setTimeout(() => {
        PokeInfo(channel, pokemon);
      }, 2000);

      setTimeout(() => {
        PokemonMissions(channel, pokemon);
      }, 5000);

      // Aviso de quando passar 70 segundos e identificou o pokemon da mensagem do bot, o bot deixa resgatar durante 90 segundos.
      setTimeout(() => {
        client.say(channel, `⏱️ ${pokemon.Name} está para fugir, você tem mais 10 segundos aproximadamente, é a hora da timerball! ⏱️`);
      }, 70000);

    } else {
      client.say(channel, `🤖: Desculpe, não achei "${pokemonNaMensagem}" na minha pokedex. NotLikeThis`);

      // Aviso de quando não encontrou o pokémon
      setTimeout(() => {
        client.say(channel, `O Pokémon está para fugir, você tem mais 10 segundos aproximadamente!`);
      }, 70000);
    }
  }
});

export { SpawnCommand };
