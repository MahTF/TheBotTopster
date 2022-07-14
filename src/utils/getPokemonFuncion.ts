import pokedex from '../utils/pokedex.json';

function getPokemon(pokemonName: string) {
  const teste = pokedex.find(
    pokemon => pokemon.Name === pokemonName
  );
  return teste;
}

export { getPokemon };
