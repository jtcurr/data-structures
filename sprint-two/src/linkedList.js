var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var result = Node(value);
    list[value] = result;
    list.length++;
    list.tail = result;
  };

  list.removeHead = function() {
    var deletedNode = null;
    var currentNode = this.head;
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this.length --;
    return deletedNode;
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
