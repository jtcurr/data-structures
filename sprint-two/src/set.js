var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (typeof item === 'number') {
  //   item = item.toString();
  // }
  var index = JSON.stringify(item);
  this._storage[index] = item;
};

setPrototype.contains = function(item) {
  // if (typeof item === 'number') {
  //   item = item.toString();
  // }
  index = JSON.stringify(item);
  var key = Object.keys(this._storage);
  for (var i = 0; i < key.length; i++) {
    if (key[i] === index) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = JSON.stringify(item);
  delete this._storage[index];
};
// add = O(1)
// contains = O(n)
// remove = O(1)
/*
 * Complexity: What is the time complexity of the above functions?
 */
