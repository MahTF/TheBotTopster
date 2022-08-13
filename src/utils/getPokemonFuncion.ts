import pokedex from '../utils/pokedex.json';

function getPokemonByName(pokemonName: string) {
  const pokemon = pokedex.find(
    pokemon => pokemon.Name.toLowerCase() === pokemonName.toLowerCase()
  );
  return pokemon;
}

function getPokemonByNumber(pokemonNumber: number) {
  const pokemonNo = `#${pokemonNumber}`;
  const pokemon = pokedex.find(
    pokemon => pokemon.No === pokemonNo
  );
  return pokemon;
}

export { getPokemonByName, getPokemonByNumber };
