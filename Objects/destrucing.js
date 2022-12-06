// Destructuring gives a syntax that makes it easy to create objects based on variables. 

// It also helps to extract data from an object. Destructuring works even with the rest and spread operators. 

// In the below example an object is destructured into individual variables: 

let myObject = { name: 'Arnold', age: 65, country: 'USA' };
let { name, age:currentAge } = myObject; //alias can be used with : 
console.log(name); 
console.log(currentAge); 
//OUTPUT: Arnold 65 
// An alias currentAge is used for age 

// Object destructuring in functions

// let myObject = { name: 'Marty', age: 65, country: 'California' }; 
// function showDetails({ country }) { 
//     console.log(country); 
// } 
// showDetails(myObject);  //invoke the function using the object 
//OUTPUT: California 
// The property 'country' of the object has been destructured and captured as a function parameter. 

 