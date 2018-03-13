import { journal, vowelCount, consonantCount, getTeaser} from './journal';

import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    // var title = $('#title').val();
    var description = $('#description').val();
    var output = journal(description);
    var vowels = vowelCount(description);
    var consonants = consonantCount(description);
    var teaser = getTeaser(description);
    // output.forEach(function(element) {
    $('#solution').append("<li>Word count: " + output + "</li>");
    $('#vowelCount').append("<li>Vowel count: " + vowels + "</li>");
    $('#numOfCons').append("<li>Consonant count: " + consonants + "</li>");
    $('#numOfCons').append("<li>All words in a sentence: " + teaser + "</li>");
    // });
  });
});
