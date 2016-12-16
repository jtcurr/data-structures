

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k, v];
  var found = false;
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }

  for (var x = 0; x < this._storage[index].length; x++) {
    if (this._storage[index][x][0] === k) {
      this._storage[index][x][1] = v;
      found = true;
    }
  } 
  if (!found) { 
    this._storage[index].push(pair); 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};

var getIndexBelowMaxForKey = function (item, max) {
  var result = 0;
  for (var i = 0; i < item.length; i++) {
    var char = item.charCodeAt(i);
    result = (result ^ char) + result;
  }
  return result % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


