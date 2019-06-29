const { chopHeadTillAlive, chopHead } = require("../src/chop-head");
const assert = require("assert");

describe("chopHeadTillAlive", () => {
  it("should return empty for empty heads", () => {
    const heads = [];
    const actual = chopHeadTillAlive(heads);
    const expected = [[]];
    assert.deepEqual(expected, actual);
  });

  it("should provide all levels of head after chopping with single head", () => {
    const heads = [1];
    const actual = chopHeadTillAlive(heads);
    const expected = [[1], []];
    assert.deepEqual(expected, actual);
  });

  it("should provide all levels of head after chopping with multiple heads", () => {
    const heads = [2, 2];
    const actual = chopHeadTillAlive(heads);
    const expected = [[2, 2], [1, 2], [2], [1], []];
    assert.deepEqual(expected, actual);
  });
});

describe("chopHead", () => {
  it("should chop head for empty heads", () => {
    const heads = [];
    const actual = chopHead(heads);
    const expected = [];
    assert.deepEqual(expected, actual);
  });

  it("should chop head for head with 1 level", () => {
    const heads = [1];
    const actual = chopHead(heads);
    const expected = [];
    assert.deepEqual(expected, actual);
  });

  it("should chop head for head with more than 1 level", () => {
    const heads = [3];
    const actual = chopHead(heads);
    const expected = [2, 2];
    assert.deepEqual(expected, actual);
  });

  it("should chop head for head with more than 1 heads", () => {
    const heads = [3, 3, 3];
    const actual = chopHead(heads);
    const expected = [2, 2, 3, 3];
    assert.deepEqual(expected, actual);
  });
});
