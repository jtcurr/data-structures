var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var result = Node(value);
    list[value] = result;
    if (list.tail !== null) {
      list.tail.next = result;
    }
    if (list.head === null) {
      list.head = result;
    }
    list.tail = result; 
    list.length++;
  };

  list.removeHead = function() {
    //locating the head of the list
    var currentNode = this.head;
    //create a variable to hold deleted value
    var deletedValue = currentNode.value;
    //reassign this.head to the node that the former head was pointing to(next)
    this.head = currentNode.next;
    //remove currentNode from list
    //debugger;
    delete list[deletedValue];
    // decrement length
    this.length--;
    //return the deleted value
    return deletedValue;
  };

  list.contains = function(target) {
    var key = Object.keys(list);
    for (var i = 0; i < key.length; i++) {
      if (key[i] == JSON.stringify(target)) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// addToTail = O(1);
// removeHead = O(1);
// contains = O(n);
/*
 * Complexity: What is the time complexity of the above functions?
 */

