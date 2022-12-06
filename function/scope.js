// Variable declaration in the JavaScript program can be done within the function or outside the function. But the accessibility of the variable to other parts of the same program is decided based on the place of its declaration. This accessibility of a variable is referred to as scope.

// JavaScript scopes can be of three types:

// Global scope
// Local scope
// Block scope



// Variables defined outside function have Global Scope and they are accessible anywhere in the program. 

// Example:

//Global variable
// var greet = "Hello JavaScript";
// function message() {
	
// 	//Global variable accessed inside the function
// 	console.log("Message from inside the function: " + greet);
// }
// message();
// //Global variable accessed outside the function
// console.log("Message from outside the function: " + greet);
// //Message from inside the function: Hello JavaScript
// //Message from outside the function: Hello JavaScript


























// Variables declared inside the function would have local scope. These variables cannot be accessed outside the declared function block.

// Example:
// var greet = "kk"
// function message() {
// 	//Local variable
// 	var greet = "Hello JavaScript";
// 	//Local variables are accessible inside the function
// 	console.log("Message from inside the function: " + greet);
// }
// message();
// //Local variable cannot be accessed outside the function
// console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Uncaught ReferenceError: greet is not defined
 

// If a local variable is declared without the use of keyword 'var', it takes a global scope.

// Example:

// // //Global variable
// var firstName = "Mark";
// function fullName() {
// 	//Variable declared without var has global scope
//  lastName = "Zuckerberg";

// 	console.log("Full Name from inside the function: " + firstName + " " + lastName);
// }

// fullName();

// console.log("Full Name from outside the function: " + firstName + " " + lastName);
// //Full Name from inside the function: Mark Zuckerberg
//Full Name from outside the function: Mark Zuckerberg



















// In 2015, JavaScript introduced two new keywords to declare variables: let and const.

// Variables declared with 'var' keyword are function-scoped whereas variables declared with 'let' and 'const' are block-scoped and they exist only in the block in which they are defined.

// Consider the below example:

// function testVar() {
// 	if (10 == 10) {
// 		var flag = "true";
// 	}
// 	console.log(flag); //true
// }
// testVar();
// In the above example, the variable flag declared inside 'if' block is accessible outside the block since it has function scope

// Modifying the code to use 'let' variable will result in an error:

// function testVar() {
//     if (10 == 10) {
//         let flag = "true";
//     }
//     console.log(flag); //Uncaught ReferenceError: flag is not defined
// }
// testVar();
// // The usage of 'let' in the above code snippet has restricted the variable scope only to 'if' block.

// // 'const' has the same scope as that of 'let' i.e., block scope.











// JavaScript interpreter follows the process called hoisting.

// Hoisting means all the variable and function declarations wherever they are present throughout the program, gets lifted and declared to the top of the program. Only the declaration and not the initialization gets hoisted to the top.

// If a variable is tried to access without declaration, the Reference Error is thrown.

// Let us declare and initialize the variable in the code but after it is accessed.           

console.log("First name: "+firstName); //First name: undefined
var firstName = "Mark";
// Because of Hoisting, the code is interpreted as below by the interpreter:

// var firstName;
// console.log("First name: "+firstName); // First name: undefined
// firstName ="Mark";
// Hoisting here helps interpret to find the declaration at the top of the program and thus reference error goes away. But interpreter says that the variable is not defined. This is because hoisting only lifted the variable declaration on the top and not initialization.

// Variables declared using 'let' and 'const' are not hoisted to the top of the program.

// Example:           

// console.log("First name: "+firstName);
// let firstName = "Mark";
// The above code throws an error as ”Uncaught ReferenceError: Cannot access 'firstName' before initialization”


let addValues = (a,b=30) => a+b;
console.log(addValues(35));
// a=35, b=undefined and 35 + undefined = NaN