<script>
  import {pokemons} from "../stores/pokestore";
  import PokemonCard from "../components/pokemonCard.svelte";
  console.log($pokemons);
</script>
<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemons as pokemon}
        <PokemonCard pokemon="{pokemon}"/>
    {/each}
</div>
