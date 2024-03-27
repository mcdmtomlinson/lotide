
//Implement the function findKeyByValue which takes in an object and
//a value. It should scan the object and return the first key which
//contains the given value. If no key with that given value is found
//then it should return undefined.

const findKeyByValue  = (obj,value) => {
  for (const objKey in obj) {
    if (obj[objKey] === value) {
      return objKey;
    }
  }
};


module.exports = findKeyByValue;