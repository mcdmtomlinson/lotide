const assertEqual = require('./assertEqual');

const head = (arr) => {
  if (arr.length === 0) {
    return null; // or some error message
  }
  return arr[0];
};

module.exports = head;