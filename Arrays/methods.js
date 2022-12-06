// JavaScript arrays consist of several useful methods and properties to modify or access the user-defined array declaration.

// Below is the table with property of JavaScript array:



// length
// It is a read-only property. It returns the length of an array, i.e., number of elements in an array

let myArray = ["Windows", "iOS", "Android"];

// console.log("Length = " + myArray.length);





// Below is the table with methods to add/remove array elements:


// push()
// Adds new element to the end of an array and return the new length of the array.

// myArray.push("Linux");
// console.log(myArray);
// // ["Android","iOS","Windows","Linux"]


// pop()
// Removes the last element of an array and returns that element.
// console.log(myArray.pop()); // Windows
// console.log(myArray); // ["Android","iOS"]



// shift()
// Removes the first element of an array and returns that element.
// console.log(myArray.shift()); //Android
// console.log(myArray); //["iOS", "Windows"]



// unshift()
// Adds new element to the beginning of an array and returns the new length

// myArray.unshift("Linux"); 
// console.log(myArray);
// //["Linux","Android","iOS","Windows"]



// splice()
// Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.

// Syntax:
// array.splice(index,deleteCount,items);

// index = index for new item
// deleteCount = number of items to be removed, starting from index next to index of new item
// items = items to be added
// myArray.push(99)
// console.log(myArray); 
// myArray.splice(1, 2, "Linux","mac" , "smsun"); 
// console.log(myArray); 
// ["Android","Linux", "iOS", "Windows"]


// slice()
// Returns a new array object copying to it all items from start to end(exclusive) where start and end represents the index of items in an array. The original array remains unaffected

// Syntax:
// array.slice(start,end)

// console.log(myArray.slice(1,3));
// ["iOS", "Windows"]


// concat()
// Joins two or more arrays and returns joined array.

// let myArray1 = ["Android","iOS"];
// let myArray2 =  ["Samsung", "Apple"];
// console.log(myArray1.concat(myArray2));

//["Android", "iOS", "Samsung", "Apple"]



// indexOf()
// Returns the index for the first occurrence of an element in an array and -1 if it is not present

// console.log(myArray.indexOf("iOS")); // 1
// console.log(myArray.indexOf("Samsung")); 

//-1

// find()
// Returns the value of the first element in an array that passes a condition specified in the callback function.
// Else, returns undefined if no element passed the test condition.

// array.find(callback(item,index,array))

// callback is a function to execute on each element of the array
// item value represents the current element in the array
// index value indicates index of the current element of the array
// array value represents array on which find() is used,
// index and array are optional

// let myArray1 = ["Android", "iOS", "Windows", "Linux"];

// let result = myArray1.find(element => element.length > 5);

// console.log(result); //Android 



// findIndex()
// Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.

// Syntax:
// Array.findIndex(callback(item,index,array));
// callback is a function to execute on each element of the array
// item value represents current element in the array
// index represents index of the current element of the array
// array represents array on which findIndex() is used.
// index and array are optional

// let myArray = ["Android", "iOS", "Windows", "Linux"];

// let result = myArray.findIndex(element => element.length > 5);
// console.log(result) //0




// filter()
// Creates a new array with elements that passes the test provided as a function.

// Syntax:

// array.filter(callback(item,index,array))

// callback is the Function to test each element of an array
// item value represents the current element of the array
// index value represents Index of current element of the array
// array value indicates array on which filter() is used

// let myArray2 = ["Android", "iOS", "Windows", "Linux"];

// let result2 = myArray.filter(element => element.length > 5);
// console.log(result2)

// //["Android","Windows"]


// forEach()
// Iterates over an array to access each indexed element inside an array.


// array,forEach(callback(item,index,array))
// callback is a function to be executed on each element of an array

// item value represents current element of an array
// index value mentions index of current element of the array
// array represents the array on which forEach() is called

// let myArray = ["Android", "iOS", "Windows"];

// myArray.forEach((element, index) =>  console.log(index + "-" + element));

//0-Android
//1-iOS
//2-Windows
//3-Linux

 

 

 ///////////




// Creates a new array from the results of the calling function for every element in the array.

// Syntax:

// array.map(callback(item,index,array))

// callback is a function to be run for each element in the array
// item represents the current element of the array
// index value represents index of the current element of the array
// array value represents array on which forEach() is invoked

// let numArr = [2, 4, 6, 8];

// let result3 = numArr.map(num=>num/2);

// console.log(result3);

//[ 1, 2, 3, 4 ]




// join()

// Returns a new string by concatenating all the elements of the array, separated by a specified operator such as comma. Default separator is comma

// let myArray = ["Android", "iOS", "Windows"];

// console.log(myArray.join()); 

// Android,iOS,Windows

// console.log(myArray.join('-'));

 // Android-iOS-Windows


 

// reduce()

// Executes a defined function for each element of passed array and returns a single value

// Syntax:

// array.reduce(callback(accumulator, currentValue, index,array),initialValue)

// callback is a function to be executed on every element of the array
// accumulator is the initialValue or previously returned value from the function.
// currentValue represents the current element of the passed array
// index represents index value of the current element of the passed array
// array represents the array on which this method can be invoked.
// initialValue represents the Value that can be passed to the function as an initial value.
// currentValue,index,array and initialValue are optional.

const numArr = [1, 2, 3, 4 , 5];

// 1 + 2 + 3 + 4

console.log(
    numArr.reduce(

            (accumulator, currentVal) => {

accumulator * currentVal ; 
// console.log(accumulator , currentVal );

            }

));


// // 10

// // 5 + 1 + 2 + 3 + 4

// console.log(numArr.reduce(
// (accumulator, currentVal) => 
// accumulator + currentVal,5));

// 15

 

 

 