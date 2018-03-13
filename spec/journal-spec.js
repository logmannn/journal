// var journal = require('./../src/journal.js').journalModule;
// var vowel = require('./../src/journal.js').vowelModule;
// var consonant = require('./../src/journal.js').consonantModule;
// var teaser = require('./../src/journal.js').teaserModule;
import { journal, vowelCount, consonantCount, getTeaser} from './../src/journal';

describe('journal', function(){
  it('should take in input, split at spaces, and return length as an int', function(){
    expect(journal("test test")).toEqual(2);
  });
});
describe('vowel', function(){
  it('should take in input and return vowel count as an int', function(){
    expect(vowelCount("test test")).toEqual(2);
  });
});
describe('consonant', function(){
  it('should take in input and return consonant count as an int', function(){
    expect(consonantCount("test test")).toEqual(6);
  });
});
describe('teaser', function(){
  it('should take in input and return from the first sentence only the first 8 words', function(){
    expect(getTeaser("one two three four five six seven eight nine.")).toEqual("one two three four five six seven eight");
  });
});
