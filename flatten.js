
//Create a function flatten which will take in an array containing
//elements including nested arrays of elements, and return a "flattened"
//version of the array.Ie. one sole array

const flatten = function(array) {
  let flatArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

module.exports = flatten;