

/*
Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a 
new array with only those elements from source that are not present in the itemsToRemove array.
Source array should not be modified
*/

//Find the unwanted elements that are present in the source array
const without = function(arr,withoutElems) {
  return arr.filter(ele => !withoutElems.includes(ele));
};

module.exports = without;

//
