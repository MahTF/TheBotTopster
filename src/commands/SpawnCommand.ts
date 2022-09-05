import { client } from '../config';
import { getPokemonByName } from '../utils/getPokemonFuncion';
import { PokemonMissions } from '../utils/PokemonMissions';

const SpawnCommand = client.on('message', (channel, tags, message) => {
  if (
    tags.username === "pokemoncommunitygame" &&
    (
      message.toLowerCase().includes("twitchlit") ||
      // 03 verificações adicionais devido ao evento que vai até dia 11 de setembro de 2022 19:00 GMT -03.
      message.toLowerCase().includes("guzzlord") ||
      message.toLowerCase().includes("xurkitree") ||
      message.toLowerCase().includes("nihilego")
    )
  ) {
    client.say(channel, "!spawn");

    // Aqui vai falar um pouco sobre o pokemon
    const mensagem = message.split(" ");
    // O bot sempre começa sua mensagem com "TwitchLit Um PokemonNome"
    const pokemon = getPokemonByName(mensagem[2]);

    if (
      message.toLowerCase().includes("guzzlord") ||
      message.toLowerCase().includes("xurkitree") ||
      message.toLowerCase().includes("nihilego")
    ) {
      setTimeout(() => {
        client.say(channel, "Este pokémon está no Evento. Taque uma Beast Ball para ter 75% de chance de captura.");
      }, 7000);
    }

    if (pokemon) {
      const resposta =
        `${pokemon.No}: ${pokemon.Name}, (Nome original: ${pokemon.NomeOriginal}). Pokémon da ${pokemon.Geracao} geração, região de ${pokemon.Regiao}.
        Tem o(s) tipo(s) ${pokemon.Tipo} e a base de seus status é ${pokemon.StatusBase}`

      setTimeout(() => {
        client.say(channel, resposta);
      }, 2000);

      setTimeout(() => {
        PokemonMissions(channel, pokemon);
      }, 5000);

      // Aviso de quando passar 70 segundos e identificou o pokemon da mensagem do bot, o bot deixa resgatar durante 90 segundos. 
      setTimeout(() => {
        client.say(channel, `⏱️ O ${pokemon.Name} está para fugir, você tem mais 10 segundos aproximadamente, é a hora da timerball! ⏱️`);
      }, 70000);

    } else {
      client.say(channel, `🤖: Desculpe, não achei \"${mensagem[2]}\" na minha pokedex. NotLikeThis`);

      // Aviso de quando não encontrou o pokémon
      setTimeout(() => {
        client.say(channel, `O Pokémon está para fugir, você tem mais 10 segundos aproximadamente!`);
      }, 70000);
    }
  }
});

export { SpawnCommand };
