var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    for (var i = 0; i < length - 1; i++) {
      storage[i] = storage[i + 1];
    }   
    delete storage[length - 1];
    if (length > 0) { length--; }
    return value;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
