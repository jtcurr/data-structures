var Stack = function() {
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Stack.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};
Stack.prototype.pop = function() {
  var result = this[this.length - 1 ];
  delete this[this.length - 1];
  if (this.length > 0) {
    this.length--;
  }
  return result;
};
Stack.prototype.size = function() {
  return this.length;
};

