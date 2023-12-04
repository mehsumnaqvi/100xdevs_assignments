/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let str1Array = str1.toUpperCase().split("");
  let str2Array = str2.toUpperCase().split("");

  str1Array.sort();
  str2Array.sort();

  str1Array = str1Array.join("");
  str2Array = str2Array.join("");

  if(str1Array == str2Array){
    return true;
  }

  return false;
}


// console.log(isAnagram('listen', 'silent'));
// console.log(isAnagram('rail safety', 'fairy tales'));
// console.log(isAnagram('openai', 'aiopen'));
// console.log(isAnagram('', ''));

// console.log(isAnagram('hello', 'world'));
// console.log(isAnagram('openai', 'open'));
// console.log(isAnagram('hello', 'lhel'));
// console.log(isAnagram('working', 'non'));

// console.log(isAnagram('Debit Card', 'Bad Credit'));
// console.log(isAnagram('School MASTER', 'The ClassROOM'));

// console.log(isAnagram('abc!', '!bac'));

// console.log(isAnagram('hello', 'hello!'));
// console.log(isAnagram('openai!', 'open'));


module.exports = isAnagram;
