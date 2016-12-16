var BinarySearchTree = function(value) {
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

BinarySearchTree.prototype.insert = function(item) {
  if (item < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(item);
    } else {
      this.left.insert(item);
    }
  }
  if (item > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(item);
    } else {
      this.right.insert(item);
    }
  }
};

BinarySearchTree.prototype.contains = function(item) {
  if (this.value === item) {
    return true;
  } else if (item < this.value && this.left) {
    return this.left.contains(item);
  } else if (item > this.value && this.right) {
    return this.right.contains(item);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
// insert = O(log n) worst case O(n)
// contains = O(log n) worst case O(n)
// depthFirstLog = O(n)
