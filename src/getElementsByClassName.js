// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var result = [];
  // debugger;
  var node = node || document.body;

  if (node.classList && node.classList.contains(className)) {
    result.push(node);
  }

  if (node.hasChildNodes()) {
    for (var i = 0; i < node.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, node.childNodes[i]));
    }

  }

  return result;

};
