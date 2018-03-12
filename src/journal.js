export function journal(description) {
  var inputs = description.split(" ");
  var output = parseInt(inputs.length);
  return output;
}

export function vowelCount(description) {
  var inputs = description.match(/[aeiou]/g);
  var numOfVowels = parseInt(inputs.length);
  return numOfVowels;
}

export function consonantCount(description) {
  var inputs = description.match(/[bcdfghjklmnpqrstvwxyz]/g);
  var numOfCons = parseInt(inputs.length);
  return numOfCons;
}

// export function countWords(description) {
//   var output = description.split(" ");
//   return output.length();
// }
