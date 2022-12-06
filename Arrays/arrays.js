// Array in JavaScript is an object that allows storing multiple values in a single variable. An array can store values of any datatype. An array's length can change at any time, and data can be stored at non-contiguous locations in the array, 

// Example:

// let numArr = [1, 2, 3, 4];
// let empArr = ["Johnson", 105678, "Chicago"];
// The elements of the array are accessed using an index position that starts from 0 and ends with the value equal to the length of the array minus 1.

// Example:

// let numArr = [1, 2, 3, 4];
// console.log(numArr[0]); //1
// console.log(numArr[3]); //4
 
///////////////////////





// Arrays can be created using the literal notation or array constructor.

// Array Literal Notation:

// Arrays are created using literal notation almost all the time.

// Syntax:          

// let myArray = [element 1, element2,…, element N];
// Example:

// let colors = ["Red", "Orange", "Green"]
 

// Array Constructor:

// Arrays can be created using the Array constructor with a single parameter which denotes the array length. The parameter should be an integer between 0 and 232-1 (inclusive). This creates empty slots for the array elements. If the argument is any other number, a RangeError exception is thrown.

// Syntax:

// let myArray = new Array(arrayLength);
// Example:

// let colors = new Array(2);
// console.log(colors.length); //2
// //Assign values to an empty array using indexes
// colors[0] = "Red";
// colors[1] = "Green";
// console.log(colors); //['Red','Green']
 

// If more than one argument is passed to the Array constructor, a new Array with the given elements is created.

// Syntax:

// let myArray = new Array(element 1, element 2,…,element N);
// Example:

// let colors = new Array("Red", "Orange", "Green");
 