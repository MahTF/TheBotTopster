import pokedex from '../utils/pokedex.json';
import { IPokemon } from './IPokemon';

function getPokemonByName(pokemonName: string): IPokemon {
  const pokemon = pokedex.find(
    pokemon => pokemon.Name.toLowerCase() === pokemonName.toLowerCase()
  );
  return pokemon as IPokemon;
}

function getPokemonByNumber(pokemonNumber: number): IPokemon {
  const pokemonNo = `#${pokemonNumber}`;
  const pokemon = pokedex.find(
    pokemon => pokemon.No === pokemonNo
  );
  return pokemon as IPokemon;
}

function getRandomPokemon(): IPokemon {
  let index = Math.floor(Math.random() * pokedex.length);
  const pokemonAleatorio = pokedex[index];

  return pokemonAleatorio;
}

export { getPokemonByName, getPokemonByNumber, getRandomPokemon };
