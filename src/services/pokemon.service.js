import Pokemon from "@/models/pokemon"

// export const fetchPokemon = async () => {
//   const data = await fetch("https://pokeapi.co/api/v2/pokemon/25");
//   const delibird = await data.json()
//   console.log(delibird);
//   return delibird
// }

export const fetchPokemonByID = async (id) => {
  const json = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); //data est une str
  const data = await json.json()
  const pokemon = new Pokemon(id, data)
  return pokemon
}
