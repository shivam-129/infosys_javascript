// Spread operator is a new operator that was introduced as part of JavaScript in 2015. It consists of triple dots ( ... ) which helps in spreading out the elements of an array to a new variable.

// When the spread operator is used in the function call, it expands the iterable object, i.e., array into the list of arguments.

// Example:

let numArr = [10, 5, 20];
// //spread turns array into the list of arguments
console.log(Math.max(...numArr)); // 20 
// // Arrays can be merged using the spread syntax.

// // Example:

// let arr1 = [3, 5, 1];
// let arr2 = [8, 2, 6];
// // let newArr = [...arr1, ...arr2];
// console.log(newArr); // [3,5,1,8,2,6]
// // Arrays can be combined with normal values.

// // Example:

// // let arr1 = [3, 5, 1];
// // let arr2 = [8, 2, 6];
// let newArr = [0, ...arr1, 4, ...arr2];
// console.log(newArr); // [0,3,5,1,4,8,2,6]
// You can also use the spread operator to create a copy of an array.

// Example:

let arr1 = [3, 5, 1];
let arrCopy1 = arr1; //shallow copy
let arrCopy2 = [...arr1]; //deep copy

arrCopy1.push(44);
arrCopy2.push(444);

console.log(...arr1 , [34 , 67 , ...arr1 , 45])
console.log(arr1 , arrCopy1 , arrCopy2);
//arrCopy becomes [3,5,1,4] and arr1 remains unaffected
 