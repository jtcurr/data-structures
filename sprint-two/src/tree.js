var Tree = function(value) {
  var tree = {};
  _.extend(tree, treeMethods);
  tree.value = value;
  tree.children = [];
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) { 
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};
// addChild: O(1);
// contains: O(n);
/*
 * Complexity: What is the time complexity of the above functions?
 */
