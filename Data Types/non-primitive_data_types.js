// The data type is said to be non-primitive if it is a collection of multiple values. 

// The variables in JavaScript may not always hold only individual values which are with one of the primitive data types. 

// There are times a group of values are stored inside a variable. 

// JavaScript gives non-primitive data types named Object and Array, to implement this. 

// Objects

// Objects in JavaScript are a collection of properties and are represented in the form of [key-value pairs]. 

// The 'key' of a property is a string or a symbol and should be a legal identifier. 

// The 'value' of a property can be any JavaScript value like Number, String, Boolean, or another object. 

// JavaScript provides the number of built-in objects as a part of the language and user-defined JavaScript objects can be created using object literals. 

// Syntax: 

// { 
//   key1 : value1,  
//   key2 : value2, 
//   key3 : value3  
// };
//   Example:   

let mySmartPhone = { 
    name: "iPhone", 
    brand: "Apple", 
    platform: "iOS", 
    price: 50000 
}; 
















// Array

// The Array is a special data structure that is used to store an ordered collection, which cannot be achieved using the objects.  

// There are two ways of creating an array: 

let dummyArr = new Array();     
//OR 
// let dummyArr = []; 
// Either array can be declared as empty and can be assigned with value later, or can have the value assigned during the declaration. 

// Example:

digits =[1,2,3,"four"]; 
// A single array can hold multiple values of different data types. 