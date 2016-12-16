

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new graphNode(node);
  this[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].edges.length; i++) {
    this.removeEdge(node, this[node].edges[i]);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return true;
  } else if (this[fromNode].edges.includes(toNode) && this[toNode].edges.includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    this[fromNode].edges.push(toNode);
    this[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].edges.splice(this[fromNode].edges.indexOf(toNode), 1);
  this[toNode].edges.splice(this[toNode].edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this);
  for (var i = 0; i < keys.length; i++) {
    cb(this[keys[i]].value); 
  }  
};

var graphNode = function(value) {
  this.value = value;
  this.edges = [];
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


