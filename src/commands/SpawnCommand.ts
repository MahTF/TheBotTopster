import { client } from '../config';
import { getPokemon } from '../utils/getPokemonFuncion';

const SpawnCommand = client.on('message', (channel, tags, message) => {
  if (
    tags.username === "pokemoncommunitygame" &&
    message.toLowerCase().includes("tente capturar usando !pokecatch")
  ) {
    client.say(channel, "!spawn");

    // Aqui vai falar um pouco sobre o pokemon
    const mensagem = message.split(" ");
    // O bot sempre começa sua mensagem com "TwitchLit Um PokemonNome"
    const pokemon = getPokemon(mensagem[2]);

    if (pokemon) {
      const resposta =
        `${pokemon.Name}, (Nome original: ${pokemon.NomeOriginal}). Pokémon da ${pokemon.Geracao} geração, região de ${pokemon.Regiao}.
        Tem o(s) tipo(s) ${pokemon.Tipo} e a base de seus status é ${pokemon.StatusBase}`

      setTimeout(() => {
        client.say(channel, resposta);
      }, 2000);
    }

    // Aqui vai avisar quando passar 70 segundos da mensagem do bot, o bot deixa resgatar durante 90 segundos. 
    setTimeout(() => {
      client.say(channel, "O Pokémon está para fugir, você tem mais 10 segundos aproximadamente");
    }, 70000);
  }
});

export { SpawnCommand };
