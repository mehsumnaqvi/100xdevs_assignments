/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    let vowels = 0;

    strArray = str.toUpperCase().split("");

    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] == 'A' || strArray[i] == 'E' || strArray[i] == 'I' || strArray[i] == 'O' || strArray[i] == 'U'){
          vowels++;
        }
  }

  return vowels;

}

  console.log(countVowels('hello'));
  console.log(countVowels('programming'));
  console.log(countVowels('OpenAI'));

  console.log(countVowels('rhythm'));
  console.log(countVowels('fly'));
  console.log(countVowels('chatbot'));

  console.log(countVowels(''));

  console.log(countVowels('EaSiEr'));
  console.log(countVowels('QUIET'));
  console.log(countVowels('aEIOU'));

  console.log(countVowels('the quick brown fox'));
  console.log(countVowels('a e i o u'));
  console.log(countVowels('testing spaces'));

  console.log(countVowels('Hello, world!'));
  console.log(countVowels('Coding is fun!!!'));
  console.log(countVowels('Keep smiling, boo.'));



module.exports = countVowels;