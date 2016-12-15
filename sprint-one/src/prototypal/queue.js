var Queue = function() {
  var snacks = Object.create(queueMethods);
  snacks.length = 0;
  return snacks;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
var queueMethods = {
  'enqueue': function(value) {
    this[this.length] = value;
    this.length++;
  },
  'dequeue': function() {
    var result = this[0];
    for (var i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    if (this.length > 0) {
      this.length--;
    }
    return result;
  },
  'size': function () {
    return this.length;
  }

};


