const Park = function(){
  this.enclosure = [];
}

Park.prototype.getSize = function(){
  return this.enclosure.length;
};
Park.prototype.addDino = function(dinosaur){
  this.enclosure.unshift(dinosaur);
}

module.exports = Park;
