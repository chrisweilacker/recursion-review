// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    var stringArray = '';
    for (var i = 0; i < obj.length; i ++) {
      stringArray += stringifyJSON(obj[i]) + ',';
    }
    return '[' + stringArray.slice(0, stringArray.length - 1) + ']';
  }

  if (typeof obj === 'object') {
    var stringObj = '';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        stringObj += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + stringObj.slice(0, stringObj.length - 1) + '}';
  }


  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }
};
