// Suppose you want to validate the data entered by the user in the email field. The user enters data as a string, but an email pattern needs to be validated. That is, a string consisting of @ and .com 

// To achieve this validation, a powerful tool is required for inspecting and processing the strings with a certain pattern. 

// The regular expression is a type of object in JavaScript that helps us perform this inspection and processing. 

// The RegExp object can be constructed using either of the two ways: 

// using RegExp constructor 
// as a literal value by enclosing within forward-slash (/) 
// Syntax: 

// let myPattern1 = new RegExp(pattern, modifiers); 
// let myPattern2 = /pattern/modifiers 

// console.log(myPattern1 , myPattern2)
/*Here, 
pattern specifies the string for regular expression 
modifiers are optional 
*/ 
// RegExp object construction makes use of the patterns in the form of Brackets and Quantifiers. 

// They are the special symbols that can be put in the pattern to perform an advanced search in the given text as given in the following example. 

// to make sure that string has @ and .com 
// let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
// let emailPattern2= /"(?=.@*)(?=.+.com)"/ 

// console.log(emailPattern , typeof(emailPattern) , typeof(emailPattern2))

 
// //to make sure that given number has digits between 0-9 and max length of 10 digits 
// let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
// console.log(phoneNumberPattern )

// //to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
// let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 
// console.log(passworPattern)
 












///////////////









// Brackets helps define a pattern that enables the search of a given character or a digit in a string or a number.

// Pattern

// Description 

// [abc]  To search in a given string for any of the characters present within the brackets 

//  [0-9]  To search in a given string for any of the digits present within the brackets 

// (a|b)  To search in a given string for either of the characters separated by ‘|’ 

// [^abc] To search in a given string for any of the characters which are not a,b, or c. 

// [^0-9]  To search in a given string for any of the digits which is not between 0-9 

 

// Quantifiers helps define a pattern that enables the search of a set of characters or digits in a string or a number. 

 

// Pattern 	Description 

// n+  To check if the given string contains at least one “n”. 

// n*  To check if the given string contains at least zero or more occurrences of n. 

// n? To check if the given string contains at least zero or one occurrence of n. 

// ?=n To match any string that is followed by a specific string n. 

// n{x} To match the given string containing  X n’s. 

// n{x,} To match the given string contain at least X n’s. 

// n{x,y}  To match the given string containing  X to Y n’s. 










//////////////////////////











// RegExp object has a very useful method: test(). 

// It offers the simplest way to match the given string with the expected pattern.

// It takes a parameter which is the string to be inspected against the expected pattern. When the actual pattern is compared with the expected pattern, this function returns a boolean that is either true or false.  

// Consider the following code that uses RegExp to validate the given email address: 

// let emailPattern = new RegExp("(?=.*@)(?=.+.com)"); 

// do{
//     let emailString = prompt("Enter email id(someone@xyz.abc)"); 
//     if(!(emailPattern.test(emailString))) { 
//              alert("Email Id is invalid! It should contain@ and .");
//         } 
//         else { 
//             alert("Email Id is Valid"); 
//         break;
//         } 
// }
// while(true)


// Additionally, following two string methods can be used: search() or replace() to find the presence of the desired pattern in a given string. 

// Example: 

let myPattern = /@gmail.com/; 
let myString="mark.christ@gmail.com"; 
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern,'@facebook.com')); 
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/ 
 