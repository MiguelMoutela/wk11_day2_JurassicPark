const assert = require('assert');
const dinossaur = require('../dinossaur.js');

describe('Dinosaur', function(){

  beforeEach(function(){
    const Dinosaur = new Dinosaur;
  })

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, 'Tyrannosaurus');
  })
})
