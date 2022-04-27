export async function pokemonApiFetch() {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await res.json();
  const pokeData = data.results
  const pokemon = pokeData.map((poke) => ({
    img: poke.url_image,
    name: poke.pokemon,
    type: poke.type_1
  }));


  return pokemon;
}