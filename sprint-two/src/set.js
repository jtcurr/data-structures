var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'number') {
    item = item.toString();
  }

  if (typeof item === 'object' && Array.isArray(item) === false){
  this._storage[JSON.stringify(item)] = item;
  }
  else {
  this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'number') {
    item = JSON.stringify(item);
  }

  if (typeof item === 'object' && Array.isArray(item) === false) {
    item = JSON.stringify(item);
  }

  var key = Object.keys(this._storage);
  for (var i = 0; i < key.length; i++) {
    if (key[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};
// add = O(1)
// contains = O(n)
// remove = O(1)
/*
 * Complexity: What is the time complexity of the above functions?
 */
