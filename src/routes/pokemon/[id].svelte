<script context="module">
  export async function load({params}) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    return {props: {pokemon}};
  }
</script>
<script>
  export let pokemon;
</script>
<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
