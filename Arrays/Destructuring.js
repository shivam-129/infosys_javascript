JavaScript introduced the destructuring assignment syntax that makes it possible to unpack values from arrays or objects into distinct variables. So, how does this syntax help to unpack values from an array.

Example:

// [RN1] we have an array with the employee name and id
let empArr = ["Shaan", 104567];
// destructuring assignment
// sets empName = empArr[0]
// and empId = empArr[1]
// let [empName, empId] = empArr;
console.log(empName); // Shaan
console.log(empId);  // 104567
 

// Destructuring assignment syntax is just a shorter way to write:

// let empName = empArr[0];
let empId = empArr[1];
 

// You can also ignore elements of the array using an extra comma.

Example:

// let [empName, , location] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
console.log(empName); // Shaan
console.log(location);  // Bangalore
 

// Rest operator can also be used with destructuring assignment syntax.

// Example:

let [empName, ...rest] = ["Shaan", 104567, "Bangalore"];
console.log(empName); // Shaan
console.log(rest);  // [104567,'Bangalore']
// Here, the value of the rest variable is the array of remaining elements and the rest parameter always goes last in the destructuring assignment.