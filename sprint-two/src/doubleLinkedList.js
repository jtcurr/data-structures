var doubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var result = Node(value);
    //stores the incoming value in storage list
    list[value] = result;
    debugger;
    //if the tail is not undefined, then the next value of the current tail will be that of the incoming node
    if (list.tail !== null) {
      list.tail.next = result;
      result.prev = list.tail;
    }
    //if the linked list is empty, and there is no head, the incoming node will be the new head of the list
    if (list.head === null) {
      list.head = result;
    }
    //the new tail of the linked list is the incoming node
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

  list.addToHead = function (value) {
    //create a new node for the incoming value
    var newNode = Node(value);
    //new node 'next' value will point to list.head object
    debugger;
    newNode.next = list.head;
    //list.head will be reassigned to new node
    debugger
    list.head = newNode;
    //new node will be added to list
    list[value] = newNode;
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
  node.prev = null;

  return node;
};