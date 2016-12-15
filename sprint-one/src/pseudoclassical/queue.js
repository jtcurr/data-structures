var Queue = function() {
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};
Queue.prototype.dequeue = function() {
  var result = this[0];
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  delete this[length - 1];
  if (this.length > 0) {
    this.length--;
  }
  return result;
};
Queue.prototype.size = function() {
  return this.length;
};


