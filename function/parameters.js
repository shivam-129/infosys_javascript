// Function parameters are the variables that are defined in the function definition and the values passed to the function when it is invoked are called arguments.

// In JavaScript, function definition does not have any data type specified for the parameters, and type checking is not performed on the arguments passed to the function.

///////////////////////////


// JavaScript does not throw any error if the number of arguments passed during a function invocation doesn’t match with the number of parameters listed during the function definition. If the number of parameters is more than the number of arguments, then the parameters that have no corresponding arguments are set to undefined.

function multiply(num1, num2) {
	if (num2 == undefined) {
		num2 = 1;
	}
	return num1 * num2;
}
console.log(multiply(5, 6)); // 30
console.log(multiply(5)); // 5
 





///////////////////////////



// JavaScript introduces an option to assign d/efault values in functions.

// function multiply(num1, num2 = 1) {
//     return num1 * num2;
// }
// console.log(multiply(5, 5)); //25
// console.log(multiply(10)); //10
// console.log(multiply(10, undefined)); //10
// In the above example, when the function is invoked with two parameters, the default value of num2 will be overridden and considered when the value is omitted while calling.





///////////////////////////





// Rest parameter syntax allows to hold an indefinite number of arguments in the form of an array.

// Syntax:

// function(a, …args) {
//     //…
// }
// The rest of the parameters can be included in the function definition by using three dots ( … ) followed by the name of the array that will hold them. 

// Example:       

// function showNumbers(x, y , ...z) {
// 	console.log(x , y , z)
//     return z;
// }
// console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
// console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]
// The rest parameter should always be the last parameter in the function definition.








// Destructuring gives a syntax which makes it easy to unpack values from arrays, or properties from objects, into different variables.


///////////////////////////

// Array destructuring in functions

// Example:

// let myArray = ["Andrew", "James", "Chris"];
// function showDetails([arg1, arg2 , arg3 , arg4]) {
// 	console.log(arg1); // Andrew
// 	console.log(arg2 , arg3); // James
// }
// showDetails(myArray);
// In the above example, the first two array elements ‘Andrew’ and 'James’ have been destructured into individual function parameters arg1 and arg2.

///////////////////////////


// Object destructuring in functions

// Example:           

// let myObject = { name: "Mark", age: 25, country: "India" };
// function showDetails({ name, country , age}) {
// 	console.log(name, country , age); // Mark India
// }
// showDetails(myObject);
// The properties name and country of the object have been destructured and captured as a function parameter.