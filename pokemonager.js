(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      let pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${n}`);
      let jsonData = await pokeData.json();
      let nameArray = jsonData.results.map(pokemon => pokemon.name);
      return nameArray;
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    async findUnderWeight(weight) {
      let pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
      let jsonData = await pokeData.json();
      let pokeUnderWeight = await jsonData.results.map(async pokemon => {
        let detailedPokeData = await fetch(pokemon.url);
        let jsonDetailedPokeData = await detailedPokeData.json();
        return {'name': pokemon.name, 'weight': jsonDetailedPokeData.weight};
      })
      let resolvedPokeWeights = await Promise.all(pokeUnderWeight);
      return resolvedPokeWeights.filter(pokemon => {
        return pokemon.weight < weight;
      })
    }
  }
  window.Pokemonager = Pokemonager;
})();
