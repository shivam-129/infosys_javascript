// After the object has been created, its variables or methods can be accessed in two different ways: 

// Using

// dot operator

// bracket operator



// Syntax: 

// For retrieving state/behavior value,

// objectName.key;
// //OR
// objectName[key]; 


// For setting state/behavior value, 

// objectName.key = value;
// //OR
// objectName[key] = value; 
// Example: 

// Retrieving state using dot operator: 

myCar.name;
//return "Fiat" 
myCar.currentSpeed;
//returns 45 
 

// Retrieving behavior using the dot operator: 

myCar.accelerate(50);//invokes accelerate() with argument = 50 
 

// Retrieving state using bracket operator: 

myCar["name"];     //return "Fiat" 
myCar["currentSpeed"];     //returns 45 
 

// Retrieving behavior using bracket operator: 

myCar["accelerate"](50);    
//invokes accelerate() with argument = 50 
 













// To work with all the keys of an object, there is a particular form of the loop: for..in. This is a different way from the for() construct. 

// Syntax: 

// for (key in object) { 
//     // executes the body for each key among object properties 
// } 
// Example: 

let user = { 
    name: "Rexha", 
    age: 24, 
    isConfirmed: true 
}; 
for (let key in user) {
    // keys 
    console.log(key);  // name, age, isConfirmed 
    // values for the keys 
    console.log(user[key]); // Rexha, 24, true 
} 
// In case of “for” constructs, it allows to declare the looping variable inside the loop, like let key here. 

// Also, another variable name can be used instead of  key. For example, "for (let prop in obj)" is also commonly used. 

 