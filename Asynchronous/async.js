// "async/await" was introduced to implement asynchronous code with promises that resemble synchronous code. "async/await" is simple, easy, readable and understandable than the promises.

// Async/Await vs Promises

 

// Async/Await

// Promises

// Scope

// The entire wrapper function is asynchronous.

// Only the promise chain itself is asynchronous.

// Logic

// Synchronous work needs to be moved out of the callback.

// Multiple promises can be handled with simple variables.

// Synchronous work can be handled in the same callback.

// Multiple promises use Promise.all().

// Error Handling

// You can use try, catch and finally.

// You can use then, catch and finally.

 

 


////////////







// Async Function

// An async function is declared with an async keyword. It always returns a promise and if the value returned is not a promise, 
//the JavaScript will automatically wrap the value in a resolved promise.

// Example:

async function hello() {
    //Value will be wrapped in a resolved promise and returned
    return "Hello Async";
}
hello().then(val => console.log(val)); // Hello Async
async function hello() {
    //Promise can be returned explicitly as well
    return Promise.resolve("Hello Async");
}
hello().then(val => console.log(val)); // Hello Async
 

// Await

// Await keyword makes JavaScript wait until the promise returns a result. It works only inside async functions. 
// JavaScript throws Syntax error if await is used inside regular functions. Await keyword pauses only the async function execution 
// and resumes when the Promise is settled.

// Example:

function sayAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}
async function hello() {
	//wait until the promise returns a value
	var x = await sayAfter2Seconds("Hello Async/Await");
	console.log(x); //Hello Async/Await
}
hello();
 
 