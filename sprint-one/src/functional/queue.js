var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var value = someInstance[0];
    for (var i = 0; i < length - 1; i++) {
      someInstance[i] = someInstance[i + 1];
    }   
    delete someInstance[length - 1];
    if (length > 0) { length--; }
    return value;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
