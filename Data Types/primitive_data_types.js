// The data is said to be primitive if it contains an individual value. 

// Let us explore each of the primitive data types individually.  

// Number 

// To store a variable that holds a numeric value, the primitive data type  number is used. In almost all the programming languages a number data type gets classified as shown below: 



// But in JavaScript. the data type number is assigned to the values of type integer, long, float, and double. For example, the variable with number data type can hold values such as 300, 20.50, 10001, and 13456.89.

// Constant of type number can be declared like this: 

// Example:  

const pi = 3.14; // its value is 3.14  
const smallestNaturalNumber = 0; // its value is 0 

// In JavaScript, any other value that does not belong to the above-mentioned types is not considered as a legal number. Such values are represented as NaN (Not-a-Number). 

// Example:  

let result = 0/0; // its value is NaN  
// let result = "Ten" * 5; //its value is NaN 










// String

// When a variable is used to store textual value, a primitive data type string is used. Thus, the string represents textual values. String values are written in quotes, either single or double. 

// Example: 

// let personName= “Rexha”;    //OR  
// let personName = ‘Rexha’;    // both will have its value as Rexha 
// You can use quotes inside a string but that shouldn't match the quotes surrounding the string. Strings containing single quotes must be enclosed within double quotes and vice versa.

// Example:  

// let ownership= "Rexha's";    //OR     
// let ownership = 'Rexha"s'; 
// This will be interpreted as Rexha's and Rexha"s  respectively. Thus, use opposite quotes inside and outside of JavaScript single and double quotes.

// But if you use the same quotes inside a string and to enclose the string: 

// Example:  

// let ownership= "Rexha"s";    //OR
// let ownership = 'Rexha's';   
// It is a syntax error.  

// Thus, remember, strings containing single quotes must be enlosed within double quotes and strings containing double quotes must be enclosed within single quotes. 











// Literals

// Literals can span multiple lines and interpolate expressions to include their results. 

// Example: 

let firstName="Kevin"; 
let lastName="Patrick";
console.log("Name: "+firstName+" "+lastName+"\n Email:"+firstName+"_"+lastName+"@abc.com");
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/

// Here, '+' is used for concatenation of identifiers and static content, and '\n' for a new line.

 

// To get the same output, literals can be used as shown below:

// let firstName="Kevin"; 
// let lastName="Patrick";
// console.log(`Name:${firstName} ${lastName}
// Email: ${firstName}_${lastName}@abc.com`); 
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/

// Using template literal, multiple lines can be written in the console.log() in one go.

// So, the template literal notation enclosed in ``(backticks) makes it convenient to have multiline statements with expressions and the variables are accessed using ${} notation. 







// Boolean 

// When a variable is used to store a logical value that can always be true or false then, primitive data type Boolean is used. Thus, Boolean is a data type which represents only two values: true and false. 

// Values such as 100, -5, “Cat”, 10<20, 1, 10*20+30, etc. evaluates to true whereas 0, “”, NaN, undefined, null, etc. evaluates to false.   














// Undefined 

// When the variable is used to store "no value", primitive data type undefined is used. 

// Any variable that has not been assigned a value has the value undefined and such variable is of type undefined. The undefined value represents "no value".

 

// Example 1: 

// let custName; //here value and the data type are undefined 
// The JavaScript variable can be made empty by assigning the value undefined. 

// Example 2: 

let custName = "John"; //here value is John and the data type is String 
custName = undefined; //here value and the data type are undefined 
 




// null 

// The null value represents "no object". 

// Null data type is required as JavaScript variable intended to be assigned with the object at a later point in the program can be assigned null during the declaration. 

// Example 1: 

let item = null;  
// variable item is intended to be assigned with object later. Hence null is assigned during variable declaration. 
// If required, the JavaScript variable can also be checked if it is pointing to a valid object or null. 

// Example 2:

document.write(item==null); 
 

//  Note: 'document' is an object that represents the HTML document rendered on the browser window and write() method helps one to populate HTML expressions or JavaScript code directly to the document.





// BigInt is a special numeric type that provides support for integers of random length.

// A BigInt is generated by appending n to the end of an integer literal or by calling the function BigInt that generates BigInt from strings, numbers, etc.

// Example:

const bigintvar = 67423478234689887894747472389477823647n;
// OR
// const bigintvar = BigInt("67423478234689887894747472389477823647");
const bigintFromNumber = BigInt(10); // same as 10n

// common math operations can be done on BigInt as regular numbers. But BigInt and regular numbers cannot be mixed in the expression.

Example:

alert(3n + 2n); // 5
alert(7n / 2n); // 3
alert(8n + 2); // Error: Cannot mix BigInt and other types
// Here the division returns the result rounded towards zero, without the decimal part. Thus, all operations on BigInt return BigInt.

// BigInt and regular numbers must be explicitly converted using either BigInt() or Number(), as shown below:

// Example:

// let bigintvar = 6n;
let numvar = 3;
// number to bigint
alert(bigintvar + BigInt(numvar)); // 9
// bigint to number
alert(Number(bigintvar ) + numvar); // 9

// In the above example, if the bigintvar is too large that it won’t fit the number type, then extra bits will be cut off.





















// Talking about comparison and boolean operations on BigInt, it works fine.

// Example:

// alert( 8n > 2n ); // true
// alert( 4n > 2 ); // true
// Even though numbers and BigInts belong to different types, they can be equal ==, but not strictly equal ===.

// Example:

// alert( 5 == 5n ); // true
// alert( 5 === 5n ); // false
// When inside if or other boolean operations, BigInts behave like numbers.

// Example:

// if (0n) {
//   // never executes
// }
//  BigInt 0n is falsy, other values are considered to be truthy.

// Boolean operators, such as ||, && and others also work perfectly with Bigints similar to numbers.

// Example:

// alert( 1n || 2 ); 
// // 1, here 1n is considered truthy
// alert( 0n || 2 ); 
// // 2, here 0n is considered falsy








// A "symbol" represents a unique identifier. You can make use of Symbol() to generate a value of this type.

// Example:

// // empid is a new symbol
// let empid = Symbol();

// Also, a description of the symbol generated can be provided which can be mostly used as a name during debugging.

// Example:

// // empid is a symbol with the description "empno"
// let empid = Symbol("empno");
// Even if various symbols are created with the same description, they are different values. Thus, symbols ensures uniqueness. So the description provided can be considered as just a label.

// let empid1 = Symbol("empno");
// let empid2 = Symbol("empno");
// alert(empid1== empid2); // false
// Here both the symbols have the same description but are never considered equal.



// Unlike other values, a symbol value doesn't follow auto-convert.

// Example:

// let empid = Symbol("empno");
// alert(empid); // TypeError: Cannot convert a Symbol value to a string
// This is a rule because strings and symbols are basically different and should not accidentally get converted to the other one.

// But if it is a must to display the Symbol, then the following can be done:

// Example:

// let empid = Symbol("empno");
// alert(empid.toString()); // Symbol(empno), now it works
// OR
// //use description
// let empid = Symbol("empno");
// alert(empid.description); // empno
 
// Global symbols

// So far you know that symbols remain unique even if they have the same name. But at times, there may be a situation where you may want the symbols with same name to be same entities. 

// In such a situation, symbols can be created in a global symbol registry and access them later and ensure that repeated accesses by the same name return exactly the same symbol. To read a symbol from the registry, use Symbol.for(key) which checks if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol.for(key) and stores it in the registry by the given key.

// Example:

// // read from the global registry
// let empid = Symbol.for("empno"); // if the symbol did not exist, it is created
// // read it again (maybe from another part of the code)
// let empidAgain= Symbol.for("empid");
// // the same symbol
// alert( empid === empidAgain ); // false
// Thus, global symbols help in creating application-wide symbol which is accessible everywhere in the code.