// A Promise is a holder for a result (or an error) that will become available in the future.

// Promise provides a more structured way to write asynchronous calls.

// Promises have replaced callback functions as the preferred programming style for handling asynchronous calls.

// Built-in support for promises has been introduced as part of JavaScript from 2015. 

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is a returned object to which you can attach callbacks, instead of passing callbacks into a function.

// Promise comes to the rescue when there are chained asynchronous calls that are dependent on each other.







/////////////







// The constructor of the Promise accepts only one argument, a function with parameters resolve and reject.

new Promise(function (resolve, reject) {
    //async code here
    //resolve if success, reject if error
});
// A Promise has three states:

// Pending: the result of the async call is not known yet.

// Resolved: async call returned with success.

// Rejected: async call returned with an error.

// To structure the async code, the async operation will be wrapped in a Promise object and handled using "then".

var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("success");
	}, 2000);
});
myPromise.then(
	function (data) {
		console.log(data + " received in 2 seconds");
	},
	function (error) {
		console.log(error);
	}
);

 

///////////////



// Promises have replaced callbacks and have solved the problem of ‘callback hell’. The sample code has been shown below to understand
//  how developers handled multiple asynchronous calls without Promises in traditional JavaScript applications.

doSomething(function(result){
	doSomethingElse(result,function(newResult){
		doThirfThing(newResult,function(finalResult){
			console.log('Print the final result ' +finalResult);
		}, failureCallback);
	}, failurCallback);
}, failureCallback);

 

// The ’Callback hell’, is now resolved using ‘Chaining’ which creates readable code and is an eminent feature of Promise. 
// Here, the asynchronous code can be chained using multiple then statements.

doSomething().then(function (result) {
	return doSomethingElse(result);
})
	.then(function (newResult) {
		return doThirdThing(newResult);
	})
	.then(function (finalResult) {
		console.log("Print the final result " + finalResult)
	})
	.catch(failureCallBack);