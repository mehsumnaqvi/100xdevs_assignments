/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    //Initialized the variable with the first element of the array instead of explicity initializing
    let isLargest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > isLargest){
            isLargest = numbers[i];
        }
    }
    return isLargest;
}

module.exports = findLargestElement;