var Stack = function() {
  var nameObj = {
    'length': 0,
  };
  _.extend(nameObj, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return nameObj;
};

var stackMethods = {
  'push': function(value) {
    this[this.length] = value;
    this.length++;
  },
  'pop': function() {
    var value = this[this.length - 1];
    delete this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }
    return value;
  },
  'size': function() {
    return this.length;
  }  
};


