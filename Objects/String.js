// This object is a wrapper for primitive type string that helps to store textual values. 

// It provides properties and methods to manipulate the given text without writing the code from scratch. 

// The string object consists of only one property, length. It is a read-only property that returns the length of the given string. 

// Example: 

let myString = "Welcom to JavaScript Session"; 
console.log("Length is: " + myString.length); 
/*OUTPUT: returns Length is: 28,  
space between words are also considered as a character*/










///////////////////////













// charAt() 

// It retrieves a character that resides on the index passed as an argument 

// Example: 

// let myString = "Hello World"; 
// console.log("Character at position 4 is : " + myString.charAt(3)); 
//Returns: Character in position 4 is: l 
concat() 

// It accepts an unlimited number of string arguments, joins them, and returns the combined result as a new string. 

// Example: /

let myStr1 = "Hello"; 
let myStr2 = " "; 
let myStr3 = "World"; 
console.log("Concatenated string: "+myStr1.concat(myStr2,myStr3)); 
//Returns: Concatenated string: Hello World 
indexOf() 

// It returns the index of the given character or maybe the given set of characters in a string passed as an argument. 

// Example: 

// let myString = "Hello World"; /
console.log("Index of character l is : "+myString.indexOf('l')); 
//Returns: Index of character l is : 2 









///////////////////////









match() 

// It makes use of the regular expression to look for a specific string and returns all the strings that match. 

// Example: 

// let myStr = "Are you enjoying JavaScript?"; 
// console.log(myStr.match(/you/)); 
/*Returns an array: 
[ 
  'you', 
  index: 4, 
  input: 'Are you enjoying JavaScript?', 
  groups: undefined 
] 
*/
console.log("string found at index position: "+myStr.match(/you/).index);
/*Returns:  string found at index position: 4*/ 
// replace() 

// It accepts the  substring or the regular expression.Also, accepts the string that will be used for the replacement string. The idea is to replace all matches with the replacement string and provide the modified string. 

Example: 

let myStr = "Are you enjoying JavaScript?"; 
myStr = myStr.replace('you', 'they'); 
console.log(myStr); 
//Returns Are they enjoying JavaScript? 




// search() 

// It searches for a match of regular expression in the given string and returns its position. If there is no match, it returns -1. 

// Example: 

let myString1 = "can you find it?"; 
console.log("Occurrence of find in statement1: "+myString1.search('find')); 
let myString2 = "Or you can not?"; 
console.log("Occurrence of find in statement2: "+myString2.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1*/ 
 


/////////////









// split() 

// It splits the given string into the array of substrings where separator marks the index for split begin and end. Suppose, the string consists of a comma (,) then the given string in the argument will be split at every comma. 

// Example: 

// let myString = "Hello World"; 
// console.log("Split string based on spaces: "+myString.split(" ")); 
//Returns: Split of string based on spaces: Hello,World 
// slice()  
// It extracts and returns part of a string. The Second parameter is optional. 

// If only one parameter is passed, it is the index from which string will start slicing from till the end of this string. If two parameters are passed, the string between these 2 index values is sliced. 

// Index value passed as the first parameter is included whereas index value passed as the second parameter is excluded. 

// Example: 

// let myString = "Hello World"; 
console.log("Slicing using 2 parameters: "+myString.slice(0,5)); 
console.log("Slicing using 1 parameter: "+myString.slice(5)); 
/*Returns:  
Slicing using 2 parameters: Hello, 
Slicing using 1 parameter: World*/ 
// substring() 

// It extracts and returns part of a string. Compared to the slice() method, it can accept a negative parameter, meaning slicing should start from the end. 

// Example: 

// let myString = "Hello World"; 
console.log("Substring using 2 parameters: "+myString.substring(2,5)); 
console.log("Substring using 1 parameter: "+myString.substring(5)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/ 







////////////////












// substr() 

// It is like the substring() method. 

// The difference is, if the second parameter is provided, it takes the first parameter as start Index and second parameter as length for slicing string. 

// Example: 

// let myString = "Hello World"; 
console.log("Substr using 2 parameters: "+myString.substr(2,5)); 
console.log("Substr using 1 parameter: "+myString.substr(5)); 
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/ 
// toLowerCase() 

// Converts characters in string to lowercase 

// Example: 

// let myString = "Hello World"; 
console.log("Lower case string: "+myString.toLowerCase()); 
//Returns: Lower case string: hello world 
toUpperCase() 

// Converts characters in string to uppercase 

// Example: 

// let myString = "Hello World"; 
console.log("Upper case string: "+myString.toUpperCase()); 
//Returns: Upper case string: HELLO WORLD 
 