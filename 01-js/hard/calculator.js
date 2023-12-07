/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    this.result = 0;
  }

  add(numberToAdd){
    this.result = this.result + numberToAdd;
  }

  subtract(numberToSubtract){
    this.result = this.result - numberToSubtract;
  }

  multiply(numberToMultiply){
    this.result = this.result * numberToMultiply;
  }

  divide(numberToDivide){
    if(numberToDivide == 0){
      throw new Error("Division by zero is not allowed");
    }
    this.result = this.result / numberToDivide;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(expressionToCalculate){

    //Removing the whitespaces
    const expressionWithoutSpaces = expressionToCalculate.replace(/\s/g, '');

    //Checking for non-numerical data
    if(/[a-zA-Z]/.test(expressionWithoutSpaces)){
      throw new Error("Expression cannot be evaluated");
    }

    //Checking for the /0 pattern to see if there is division by 0
    if(/\/0/.test(expressionWithoutSpaces)){
      throw new Error("Division by zero is not allowed");
    }

      const calculatingExpression = new Function(`return ${expressionToCalculate}`);
      const finalResult = calculatingExpression();

      this.result = finalResult;
  }

}

  // var number = new Calculator();
// number.add(5);
// console.log(number.getResult());

// number.subtract(1);
// console.log(number.getResult());

// number.multiply(5);
// console.log(number.getResult());

// number.divide(10);
// console.log(number.getResult());

// number.clear();
// console.log(number.getResult());

// console.log(number.calculate('2 + 3 * 4'));
// console.log(number.calculate('(   15 + 3) /   6   '));
// console.log(number.calculate('10 - (4 + 2)'));
// console.log(number.calculate('(2 + 3) * (6 - (4 + 1) / 2) + 7'));
// console.log(number.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7'));
// console.log(number.calculate('(2.5 + 1.5) * 3'));
// console.log(number.calculate('5 + abc'));

// number.divide(0);
// console.log(number.getResult());




module.exports = Calculator;
