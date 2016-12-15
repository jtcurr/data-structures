var Stack = function() {
  var snacks = Object.create(stackMethods);
  snacks.length = 0;
  return snacks;
};
var stackMethods = {};
stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};
stackMethods.pop = function() {
  var value = this[this.length - 1];
  delete this[this.length - 1];
  if (this.length > 0) {
    this.length --;
  }
  return value;
};
stackMethods.size = function() {
  return this.length;
};




