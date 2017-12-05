const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function(){
  let park;
  let dinosaur;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur();
  })
  it('should have an empty enclosure at start', function(){
    assert.strictEqual(park.getSize(), 0);
  })
  it('should be able to add a dinosaur', function(){
    park.addDino(dinosaur);
    assert.strictEqual(park.getSize(),1)
  })
})
