var Tree = function(value) {
  var tree = {};
  _.extend(tree, treeMethods);
  tree.value = value;
  tree.children = [];
  tree.parent = null;
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this || null;
  this.parent = child;
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

treeMethods.find = function(target) {
  if (this.value === target) {
    return this;
  }
  for (var i = 0; i < this.children.length; i++) {
    return this.children[i].find(target);
  }
  return null;
};

treeMethods.removeFromParent = function(target) {
  //find target in tree - returns node
  var orphanNode = this.find(target);
  //in node.parent.children we will remove association to target
  for (var i = 0; i < orphanNode.parent.children.length; i++) {
    if (orphanNode.parent.children[i].value === target) {
      orphanNode.parent.children.splice(i, 1);
    }
  }
};

// addChild: O(1);
// contains: O(n);
/*
 * Complexity: What is the time complexity of the above functions?
 */
