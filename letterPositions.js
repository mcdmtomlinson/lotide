

//We'll implement a new function letterPositions which
//will return all the indices (zero-based positions) in the string
//where each character is found. For each letter, instead of
//returning just one number to represent its number of occurrences,
//multiple numbers may be needed to represent all the places in the
//string that it shows up.

const letterPositions = function(string) {
  let letterPos = {};

  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (!str[i].match(/ /)) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};

module.exports = letterPositions;
