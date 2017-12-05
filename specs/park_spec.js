const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function(){
  let park;
  let dinosaur;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur('Tyrannosaurus', 3);
  })
  it('should have an empty enclosure at start', function(){
    assert.strictEqual(park.getSize(), 0);
  })
  it('should be able to add a dinosaur', function(){
    park.addDino(dinosaur);
    assert.strictEqual(park.getSize(),1)
  })
  it('should be able to remove dinos of a particular type', function(){
    park.addDino(dinosaur);
    assert.strictEqual(park.getSize(),1)
    park.removeByType('Tyrannosaurus')
    assert.strictEqual(park.getSize(),0)
  })
  it('should get a count of all dinos with offspring number higher then 2', function(){
    park.addDino(dinosaur);
    assert.strictEqual(park.getCountOfOffspringPropertyHigherThanANumber(2),1);
  })
})
