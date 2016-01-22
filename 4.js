'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.


function countLetters(string) {

	var letterCountList = {};
	var splitString = string.split('')
	splitString.forEach(function(letter) {
    if (letterCountList[letter] === undefined){
    	letterCountList[letter] = 0;
    }
    letterCountList[letter]++
   });
  return letterCountList
}
console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
