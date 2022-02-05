<script>
  export let pokemon;
</script>
<a href={`/pokemon/${pokemon.id}`}>
    <img src="{pokemon.image}" alt="{pokemon.name}">
    <h2>{pokemon.id}. {pokemon.name}</h2>
</a>
