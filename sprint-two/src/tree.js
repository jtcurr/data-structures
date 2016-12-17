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
  child.parent = tree.parent;
  this.parent = child;
  debugger;
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

// treeMethods.removeFromParent = function(target, parent) {
//   debugger;
//   if ( this.value === target) {
//     if (parent !== undefined) {
//       parent.children.splice(parent.children.indexOf(target), 1);
//     }
//     delete this;
//   }
// };
//   for (var i = 0; i < this.children.length; i++) {
//     treeMethods.removeChild(target,        this);
//   }
// addChild: O(1);
// contains: O(n);
/*
 * Complexity: What is the time complexity of the above functions?
 */
