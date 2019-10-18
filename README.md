# Fetch Pokemon

The last time you went searching for pokemon, it was to learn about higher order functions and how to use them.

We are going to add another level of difficulty. This time, we'll be using a RESTful Pokemon API along with fetch and promises!

## Objectives

In this task, you will be:

- reviewing the use of `map` and `filter` to return specific data
- [using the JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to query data from the Pokemon API
- using promises to control the flow of operations stemming from the fetches

## Instructions

- Take a quick look through the [Pokemon API documentation](https://pokeapi.co/docs/v2.html) and familiarize yourself with it. You'll only be using a small bit of it---all having to do with [pokemon](https://pokeapi.co/docs/v2.html#pokemon).
- In `pokemonager.js`, complete the following methods:

  - `findNames` - Takes an input _n_, an integer, and returns an array of all the names for _n_ pokemon from the API
  - `findUnderWeight` - Takes an input _weight_, an integer, and returns an array of all the pokemon that are under the given _weight_. **IMPORTANT NOTE:** For this method, please limit the number of Pokemon you search through to 10. We do not want to make too many calls to the Pokemon API.

- Remember to include a `catch()` method for your promises!

### Challenge Mode for cool kids

- Use [axios](https://github.com/axios/axios) instead of fetch to make requests.

  - You will have to add it to the project, remember this is not a node repository so we can't add the package, read through the readme in the link above and you should get a good idea of what you need.

## Run Tests

- Check your work by opening `testRunner.html` in your browser

## Resources

These help immensely:

- [MDN's Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Intro to the Fetch API](https://www.sitepoint.com/introduction-to-the-fetch-api/)
- [PouchDB - We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
