

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k, v];
  var found = false;
  if (!this._storage.get(index)) { 
    this._storage.set(index, []); 
  }
  var bucket = this._storage.get(index);
 
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      found = true;
    }
  }
  if (!found) {
    bucket.push(pair);
    this._count++;
    if ( this._count / this._limit > .75) {
      this._resize(this._limit * 2);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  debugger;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._count--;
      if (this._count / this._limit < .25) {
        var s = Math.floor(this._limit / 2);
        this._resize(s);
      }
    }
  }

};

HashTable.prototype._resize = function(newSize) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;
  this._count = 0;
  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }      
    }
  }.bind(this));
};
// insert = O(1), worst case O(n)
// retrieve = O(1), worst case O(n)
// remove = O(1), worst case O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */


