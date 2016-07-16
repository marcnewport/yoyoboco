var assert = require("assert");
var main = require("../assets/scripts/main.js");

describe('Main', function() {
  it('should have main', function() {
    assert.equal('object', typeof main);
  });
});
