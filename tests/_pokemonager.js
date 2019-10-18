const expect = chai.expect;

let pokemonager;

describe("pokemonager", () => {
  beforeEach(() => {
    pokemonager = new Pokemonager();
  });

  it("should return an array of names of all Pokemon", () => {
    let called = false;
    const realMap = Array.prototype.map;
    Array.prototype.map = function() {
      called = true;
      return realMap.apply(this, arguments);
    };

    return pokemonager.findNames(100).then((actual) => {
      expect(called, "Array.map() to have been called").to.be.true;
      expect(Array.isArray(actual)).to.equal(true);
      expect(actual.length).to.equal(100);
      expect(actual).to.deep.equal(names);
      Array.prototype.map = realMap;
    });
  });

  it("should find pokemon that are under a given weight", () => {
    let called = false;
    const realFilter = Array.prototype.filter;
    Array.prototype.filter = function() {
      called = true;
      return realFilter.apply(this, arguments);
    };

    return pokemonager.findUnderWeight(100).then((actual) => {
      expect(actual.length).to.equal(4);
      expect(Array.isArray(actual)).to.equal(true);
      expect(actual.map((pokemon) => pokemon.name)).to.deep.equal(underWeight);
      Array.prototype.filter = realFilter;
    });
  });
});
