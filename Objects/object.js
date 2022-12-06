// <!-- In JavaScript objects, the state and behaviour is represented as a collection of properties

// Each property is a [key-value] pair where the key is a string and the value can be any JavaScript primitive type value, an object, or even a function.

// JavaScript objects can be created using two different approaches. -->


//     let name = "Arnold";
// let age = 65;
// let country = "USA";
// let obj = {
//     name: name,
//     age: age,
//     country: country
// };


// Below is the modern way to create objects in a simpler way: 

// let name="Arnold"; 
// let age=65; 
// let country="USA"; 
// let obj={name,age,country}; 













// The object literal property shorthand is syntactic sugar, which simplifies the syntax when literals are used in function parameters or as return values. 

//Literal property without shorthand 
// function createCourse(name, status) {
//     return { name: name, status: status};
// }
// function reviewCourse(name) {
//     return {type: "JavaScript", name: name};
// }
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
// function createCourse(name, status) {
//     return {name, status};
// }
// function reviewCourse(name) {
//     return {type: "JavaScript", name};
// } 

// console.log(createCourse('python' , 'complete'))















// Earlier in JavaScript to add a dynamic property to an existing object, below syntax was used. 

// let personalDetails = {
//     name: "Stian Kirkeberg",
//     country: "Norway"    
// };
// let dynamicProperty = "age";
// personalDetails[dynamicProperty] = 45;
// console.log(personalDetails.age);  //Output: 45 

// // With newer updates in JavaScript after 2015 the dynamic properties can be conveniently added using hash notation and the values are computed to form a key-value pair. 

// let dynamicProperty = "age";
// let personalDetails = {
//     name: "Stian Kirkeberg",
//     country: "Norway",
//     [dynamicProperty]: 45
// };
// console.log(personalDetails.age);   //Output: 45 




















// To construct multiple objects with the same set of properties and methods, function constructor can be used. Function constructor is like regular functions but it is invoked using a 'new' keyword. 

// Example: 

function Car(name, model, color, numberOfGears, currentSpeed, currentGear) { 
    //-------------States of the object--------- 
    this.name = name; 
    this.model = model; 
    this.color = color; 
    this.numberOfGears = numberOfGears;
    this.currentSpeed = currentSpeed; 
    this.currentGear = currentGear; 
    //-------------Behaviour of the object--------- 
    this.accelerate = function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter; 
        return this.currentSpeed; 
    }
    this.brake = function (speedCounter) { 
        this.currentSpeed = this.currentSpeed - speedCounter; 
        return this.currentSpeed; 
    } 
} 

// 'this' keyword that is used in this case is a JavaScript pointer. It points to an object which owns the code in the current context. 

// It does not have any value of its own but is only the substitute for the object reference wherever it is used. 

// Example:

// If used inside an object definition, it points to that object itself. If used inside the function definition, it points to the object that owns the function. 

// To create objects using function constructor, make use of 'new' keyword, and invoke the function. This initializes a variable of type object. The properties and methods of the object can be invoked using the dot or bracket operator.

// Retrieving state using the dot operator: 

console.log(myCar.name);     //return "Fiat" 
console.log(myCar.currentSpeed);     //returns 45 
// Retrieving behavior using the dot operator: 

console.log(myCar.accelerate(50));//invokes accelerate() with argument = 50 
// Retrieving state using the bracket operator: 

console.log(myCar["name"]);     //return "Fiat" 
console.log(myCar["currentSpeed"]);     //returns 45 
// Retrieving behavior using the bracket operator: 

console.log(myCar["accelerate"](50));    //invokes accelerate() with argument = 50 
 