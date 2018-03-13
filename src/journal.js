// export function journal(description) {
//   var inputs = description.split(" ");
//   var output = parseInt(inputs.length);
//   return output;
// }

function journal(description) {
  this.description = description;
  var inputs = this.description.split(" ");
  var output = parseInt(inputs.length);
  return output;
}

function vowelCount(description) {
  var inputs = description.match(/[aeiou]/g);
  var numOfVowels = parseInt(inputs.length);
  return numOfVowels;
}

function consonantCount(description) {
  var inputs = description.match(/[bcdfghjklmnpqrstvwxyz]/g);
  var numOfCons = parseInt(inputs.length);
  return numOfCons;
}

function getTeaser(description) {
  // grab everything till the end of the sentence
  var arr = description.match(/(.*?)[.?!]/g);
  var firstEightWords = arr[0].split(/\s+/).slice(0,8).join(" ");

  return firstEightWords;
}

// If the sentence is over 8 words, only display those first 8 words. Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.



exports.journalModule = journal;
exports.vowelModule = vowelCount;
exports.consonantModule = consonantCount;
exports.teaserModule = getTeaser;
