(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      let pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${n}`);
      let jsonData = await pokeData.json();
      let nameArray = jsonData.results.map(pokemon => pokemon.name);
      console.log(nameArray);
      return nameArray;
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    async findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
      let pokemonNameAndUrl = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
      );
      let nameAndUrlJson = await pokemonNameAndUrl.json();
      let finalArray = nameAndUrlJson.results.map(async (pokemon) => {
        let pokeName = pokemon.name;
        let pokeUrl = pokemon.url;
        let fetchedData = await fetch(pokeUrl);
        let fetchedDataJson = await fetchedData.json();
        return { name: pokeName, weight: fetchedDataJson.weight };
      });

      const resolvedPromiseArray = await Promise.all(finalArray).then(
        (result) => {
          return result.filter((pokeArray) => pokeArray.weight < weight);
        }
      );

      return resolvedPromiseArray;
    }
  }
  window.Pokemonager = Pokemonager;
})();
