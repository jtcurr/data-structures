var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var result = Node(value);
    if (list.tail !== null) {
      list.tail['next'] = result;
    }
    list[value] = result; //am I adding a new object to the array in the right way.
    list.length++;
    if (list.head === null) {
      list.head = result;
    }
    list.tail = result; //assign a new tail
    console.log(list);
    debugger;
  };

  list.removeHead = function() {
    var currentNode = this.head;
    var deletedNode = currentNode;
    this.head = currentNode.next;
    currentNode = null;
    this.length--;
    return deletedNode.value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

