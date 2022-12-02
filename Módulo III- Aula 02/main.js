const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;



//   const pokemonList =  document.getElementById('pokemonList');

  fetch(url)
  .then((response) => response.json())
  .then((jsonBody) =>  jsonBody.results)
  .then((pokemons) => {
        console.log(pokemons);

//      for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons[i];
//         pokemonList.innerHTML += convertPokemonToLi(pokemon);
//     }
  })
  .catch((error) => console.log(error));
