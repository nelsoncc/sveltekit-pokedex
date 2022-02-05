import {writable} from "svelte/store";

export const pokemons = writable([]);

const fetchPokemon = async (limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const result = await fetch(url);
  const data = await result.json();
  const loadedPokemon = data.results.map((data, index) => {
    return {
      name: data.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }
  });
  pokemons.set(loadedPokemon);
};

fetchPokemon(150);
