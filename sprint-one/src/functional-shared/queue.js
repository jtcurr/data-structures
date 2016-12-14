var Queue = function() {
  var snacks = {
    'length': 0
  };
  _.extend(snacks, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return snacks;
};

var queueMethods = {
  'enqueue': function(val) {
    this[this.length] = val;
    this.length++;
  },
  'dequeue': function() {
    var value = this[0];
    for (var i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    if (this.length > 0) {
      this.length--;
    }
    return value;
  },
  'size': function() {
    return this.length;
  }

};


