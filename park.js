const Park = function(){
  this.enclosure = [];
}

Park.prototype.getSize = function(){
  return this.enclosure.length;
};
Park.prototype.addDino = function(dinosaur){
  this.enclosure.unshift(dinosaur);
}
Park.prototype.removeByType = function(type){
  for(var dinosaur of this.enclosure){
    if (dinosaur.type === type){
      index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
  }
}
Park.prototype.getCountOfOffspringPropertyHigherThan2 = function(){
  count = 0;
  for (var dinosaur of this.enclosure){
    if (dinosaur.offspring > 2){
      count++;
    }
  }
  return count;
}

module.exports = Park;
