// A callback function is a function that is passed as an argument to another function. Callbacks make sure that a certain function does not execute until another function has already finished execution.

// Callbacks are handy in case if there is a requirement to inform the executing function on what next when the asynchronous task completes. Here the problem is there are bunch of asynchronous tasks, which expect you to define one callback within another callback and so on. This leads to callback hell.

// Callback hell, which is also called a Pyramid of Doom, consists of more than one nested callback which makes code hard to read and debug. As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if there are more loops, conditional statements, and so on in the code.

// Example:

// myFun1(function () {
//     myFun2(function () {
//         myFun3(function () {
//             myFun4(function () {
//                 ....
//             });
//         });
//     });
// });
// In the above example, it is noticed that the "pyramid" of nested calls grows to the right with every asynchronous action. It leads to callback hell. So, this way of coding is not very good practice.

// To overcome the disadvantage of callbacks, the concept of Promises was introduced.

 