/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

    let sum = 0;

    let timeDifference = 0.0;

    let startDate = new Date();
    const startTime = startDate.getTime();
    // console.log("Start Time " + startTime);

    for(let i = 1; i < n; i++){
        sum = sum + i;
    }

    let endDate = new Date();
    const endTime = endDate.getTime();
    // console.log("End Time " + endTime);


    return endTime/1000 - startTime/1000;
}

console.log(calculateTime(100))
console.log(calculateTime(100000))
console.log(calculateTime(1000000000))
console.log(calculateTime(2000000000))