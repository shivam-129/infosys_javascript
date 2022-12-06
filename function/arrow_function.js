// Below are a few scenarios of arrow functions.

// Syntax 1: Multi-parameter, multi-line code: 

// If code is in multiple lines, use {}.

calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// // // 1000

 

// Syntax 2: No parameter, single line code:
// If the code is single line, {} is not required. The expression is evaluated and automatically returned.

trip = () => "Let's go to trip."
console.log(trip());
// Let's go to trip.

 

// Syntax 3: One parameter, single line code:

// If only one parameter, then () is not required.

trip = place => "Trip to " + place;
console.log(trip("Paris"));
 

// Syntax 4: One parameter, single line code:

// if only one parameter, use '_' and do not use a variable name also.

trip = _ => "Trip to " + _;
console.log(trip("Paris"));
// // // Trip to Paris





/////////////////////////////



// Arrow function also adds a great difference with respect to the context object – 'this' reference.

// Consider the below code where a regular function is defined within a method:

// const myObject = {
//   items: [1],
//   myMethod() {
//     console.log(this == myObject) // true
//     this.items.forEach(function() {
//       console.log(this , myObject , window)

//       console.log(this === myObject) // false
//       console.log(this === window); // true
//     });
//   }
// };
// myObject.myMethod();


/////////////////////////////

// A regular function defines its 'this' value based on how the function is invoked.

// In the above-mentioned example, the myObject defines 'this' as an instance of itself. So, in line 4, the reference to 'this' points to the myObject itself. The regular function is used within the forEach() method. So, inside of the regular function, 'this' points to the window global object.

// If the same logic is re-written using the arrow function as below:

// const myObject = {
//   items: [1],
//   myMethod() {
//     console.log(this == myObject) // => true
//     this.items.forEach(() => {
//       // console.log(this , myObject , window)
//       console.log(this === myObject) // => true
//       console.log(this === window); // => false
//     });
//   }
// };
// myObject.myMethod();

// Arrow functions do not have their own 'this'. If 'this' is accessed, then its value is taken from the outside of the arrow function. So, in the above-mentioned code, the value of 'this' inside the arrow function equals to the value of 'this' of the outer function, that is, myObject.