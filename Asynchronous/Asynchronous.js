// Consider below-given code snippet:

// console.log("Before For loop execution");
// for (var i = 0; i < 2; i++) {
//     console.log("setTimeout message");
//     func1();
//     func2();
// }
// console.log("After For loop execution");
function func1(i) {
    console.log("Am in func1" , i);
}
function func2(i) {
    console.log("Am in func2" , i);
}

 

// According to JavaScript sequentially execution nature, the output of the above code snippet would be as shown below:



// If previous code is modified by adding setTimeout() method in for loop as shown below, then observe the output once again.

// Modified code snippet:

for (var i = 0; i < 2; i++) {
    setTimeout(function() {
        console.log("setTimeout message");
        func1(i);
    }, );
    func2(i);
}

// New Output:



// As observed in the output above, due to usage of setTimeout() method the entire execution of code behavior has been changed,
// and the code has been executed asynchronously



// Some of the real-time situations where you may need to use the JavaScript Asynchronous code of execution while implementing business logic are:

// To make an HTTP request call.

// To perform any input/output operations.

// To deal with client and server communication.

// These executions in JavaScript can also be achieved through many techniques.

// Some of the techniques are:  

// Callbacks

// Promises

// Async/Await 