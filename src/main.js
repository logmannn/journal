import './styles.css';
import { journal } from './journal';
import { vowelCount } from './journal';
import { consonantCount } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    // var title = $('#title').val();
    var description = $('#description').val();
    var output = journal(description);
    var vowels = vowelCount(description);
    var consonants = consonantCount(description);
    // output.forEach(function(element) {
    $('#solution').append("<li>Word count: " + output + "</li>");
    $('#vowelCount').append("<li>Vowel count: " + vowels + "</li>");
    $('#numOfCons').append("<li>Consonant count: " + consonants + "</li>");
    // });
  });
});
