const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailArray = arr;
  tailArray.splice(0,1);
  return tailArray;
};

module.exports = tail;