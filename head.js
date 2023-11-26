const assertArraysEqual = function(array1, array2) {  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal :)`);
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal :(`);
  }
};

assertArraysEqual(head([5,6,7]), 5);
assertArraysEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");