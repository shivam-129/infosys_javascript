// uilt-in functions

// Description

// Example

// setTimeout()

// It executes a given function after waiting for the specified number of milliseconds.
// It takes 2 parameters. First is the function to be executed and the second is the number of milliseconds after which the given function should be executed.

// function executeMe(){

// console.log("Function says hello!")

// }
// setTimeout(executeMe, 3000);



/////////////////////////////


// clearTimeout()

// It cancels a timeout previously established by calling setTimeout().
// It takes the parameter "timeoutID" which is the identifier of the timeout that can be used to cancel the execution of setTimeout(). The ID is returned by the setTimeout().

// function executeMe(){

// console.log("Function says hello!")

// }

// let timerId= setTimeout(executeMe, 3000);

// // console.log(timerId)
// setTimeout(executeMe, 3000);
// setTimeout(clearTimeout(timerId), 3000)



/////////////////////////////


// setInterval()

// It executes the given function repetitively.
// It takes 2 parameters, first is the function to be executed and second is the number of milliseconds. The function executes continuously after every given number of milliseconds.

// function executeMe(){

// console.log("Function says hello!");

// }

// setInterval(executeMe,2000);


/////////////////////////////


// clearInterval()

// It cancels the timed, repeating execution which was previously established by a call to setInterval().
// It takes the parameter “intervalID” which is the identifier of the timeout that can be used to cancel the execution of setInterval(). The ID is returned by the setInterval().

function executeMe(){

console.log("Function says hello!");

}

let interval_timerId=setInterval(executeMe, 2000);

function stopInterval(){
          clearInterval(interval_timerId);
          console.log("Function says bye to setInterval()!")
}

setTimeout(stopInterval,5000)

//It executes executeMe() every 2 seconds and after 5 seconds, further calls to executeMe() is stopped.

/////////////////////////////

 