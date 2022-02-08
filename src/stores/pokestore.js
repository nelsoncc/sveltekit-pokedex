import {writable} from "svelte/store";

export default function (hdMode) {
  const pokemons = writable([]);
  async function get(hdMode) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const result = await fetch(url);
    const data = await result.json();
    const loadedPokemon = data.results.map((data, index) => {
      return {
        name: data.name,
        id: index + 1,
        image: hdMode ?
          `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + (index + 1)).slice(-3)}.png`
          :
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }
    });
    pokemons.set(loadedPokemon);
  }
  get(hdMode)
  return [pokemons, get]
}
