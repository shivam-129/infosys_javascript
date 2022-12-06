// JavaScript comes with certain built-in functions. To use them, they need to be invoked.

// Below is the table with some of these built-in functions to understand their significance and usage.

// Built-in functions

// Description

// Example

// alert()

// It throws an alert box and is often used when user interaction is required to decide whether execution should proceed or not.
// alert("Let us proceed");




// confirm()

// It throws a confirm box where user can click "OK" or "Cancel". If "OK" is clicked, the function returns "true", else returns "false".
// let decision = confirm("Shall we proceed?");
// console.log(decision)



// prompt()

// It produces a box where user can enter an input. The user input may be used for some processing later. This function takes parameter of type string which represents the label of the box.
// let userInput = prompt("Please enter your name:");
// console.log(userInput)



// isNaN()

// This function checks if the data-type of given parameter is number or not. If number, it returns "false", else it returns "true".
// console.log( 30 , isNaN(30) , typeof(34));       //false
// console.log( 'hello' ,isNaN('hello') , typeof('hello '));  //true
// console.log( '342' , isNaN('342') , typeof('342'));  //true



// isFinite()

// It determines if the number given as parameter is a finite number. If the parameter value is NaN,positive infinity, or negative infinity, this method will return false, else will return true.
// console.log(isFinite(30));     //true
// console.log(isFinite('hello')); //false
// console.log(isFinite('342'))


// parseInt()

// This function parses string and returns an integer number.
// It takes two parameters. The first parameter is the string to be parsed. The second parameter represents radix which is an integer between 2 and 36 that represents the numerical system to be used and is optional.
// The method stops parsing when it encounters a non-numerical character and returns the gathered number.
// It returns NaN when the first non-whitespace character cannot be converted to number.

// console.log(parseInt("10"));         //10
// console.log(parseInt("10 20 30"));   //10, only the integer part is returned
// console.log(parseInt("10 years"));   //10
// console.log(parseInt("-1.0 years"));   //10
// console.log(parseInt("years 10"));   //NaN, the first character stops the parsing



// parseFloat()

// This function parses string and returns a float number. 
// The method stops parsing when it encounters a non-numerical character and further characters are ignored.
// It returns NaN when the first non-whitespace character cannot be converted to number.

console.log(parseFloat("10.34"));      //10.34  
console.log(parseFloat("10 20 30"));   //10
console.log(parseFloat("-10"));   //10
console.log(parseFloat("10.50 years")); //10.50

 

// eval()

// It takes an argument of type string which can be an expression, statement or sequence of statements and evaluates them.

eval("let num1=2; let num2=3;let result= num1 * num2;console.log(result)");

 