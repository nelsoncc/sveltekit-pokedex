<script>
  import fetchFactory from "../stores/pokestore";
  import PokemonCard from "../components/pokemonCard.svelte";
  import Button from '../components/button.svelte'

  let searchPokemon = "";
  let filteredPokemons = [];
  let hdMode = false;
  let [pokemons] = fetchFactory(hdMode);
  function handleDisplay() {
    hdMode = !hdMode;
  }

  $: {
    console.log(hdMode)
    if(hdMode) {
      [pokemons] = fetchFactory(hdMode);
    } else {
      [pokemons] = fetchFactory(hdMode);
    }
  }

  $: {
    console.log(searchPokemon)
    if(searchPokemon) {
        filteredPokemons = $pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()));
    } else {
      filteredPokemons = [...$pokemons];
    }
  }

  console.log($pokemons);
</script>
<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<Button on:click={handleDisplay}>{hdMode ? "HD" : "SD"}</Button>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
       bind:value={searchPokemon}  type="text" placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemons as pokemon}
        <PokemonCard pokemon="{pokemon}"/>
    {/each}
</div>
