// The spread operator is used to combine two or more objects. The newly created object will hold all the properties of the merged objects. 

// Syntax: 

// let object1Name = { 
//     //properties 
// }; 
// let object2Name = { 
//     //properties 
// }; 
// let combinedObjectName = { 
//     ...object1Name, 
//     ...object2Name 
// }; 
// //the combined object will have all the properties of object1 and object2 
// Example: 

let candidateSelected={
	Name:'Rexha Bebe',
	Qualification:'Graduation',
};
let SelectedAs={
	jobTitle:'System Engineer',
	location:'Bangalore'
};
let employeeInfo={
	...candidateSelected,
	...SelectedAs
};
console.log(employeeInfo); 
/*
{
  Name: 'Rexha Bebe',
  Qualification: 'Graduation',
  jobTitle: 'System Engineer',
  location: 'Bangalore'
} 
*/











// It is possible to get a copy of an existing object with the help of the spread operator. 

// Syntax:  

// let copyToBeMade = { ...originalObject };  
// Example:   

// let originalObj = { one: 1, two: 2, three: 3 };
// let clonedObj = { ...originalObj };
/*
Here spreading the object into a list of parameters happens 
which return the result as a new object 
checking whether the objects hold the same contents or not 
*/
alert(JSON.stringify(originalObj) === JSON.stringify(clonedObj)); // true 
//checking whether both the objects are equal 
alert(originalObj === clonedObj); // false (not same reference) 
//to show that modifying the original object does not alter the copy made 
originalObj.four = 4;
alert(JSON.stringify(originalObj)); // {"one":1,"two":2,"three":3,"four":4} 
alert(JSON.stringify(clonedObj)); // {"one":1,"two":2,"three":3} 
 