// JSON is an acronym for JavaScript Object Notation. 

// It is a lightweight data-interchange format used for storing and sharing data between client and server over the network. 

// For example, to store and share customer information over the web, this is how the corresponding JSON data will be like: 

let data = {
    "customers": [
        { "firstName": "Bob", "lastName": "Morry" },
        { "firstName": "Albert", "lastName": "Smith" },
        { "firstName": "Kate", "lastName": "Ward" }
    ]
};

console.log(data ,JSON.stringify(data) , typeof(data))
//Where data is the JSON object and  
//customers is the array name 

// In this code, the variable 'data' is exactly like the literal notation syntax used for object creation in JavaScript. Whereas there is a very small difference. 

// For JavaScript objects, the key is not put in quotes and if values are of string data type they can be put in single or double-quotes. 

// But for JSON object, it is mandatory to put the key inside double quotes and all the values of type string inside double quotes. 

// Example: 

// JavaScript Object: { firstName: "Sam", lastName: "Fernandes" } 
// //key need not be enclosed within quotes for JavaScript Objects 
// JSON Object: { "firstName": "Sam", "lastName": "Fernandes" } 
// //key must be enclosed within quotes for JSON Objects 
// JSON is a text-only format. It travels over the network as a string. 


////////



// Following are the two methods provided by the JSON object. 

// parse()

// Used to parse a string as JSON and helps the program to process objects. 

// Example: 

let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}'   
let obj = JSON.parse(stringJSON); 
console.log(obj ,  typeof(obj)); 
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 


// stringify()

// Returns the JSON string corresponding to the given object. 

// Example: 

let dataJSON = { firstName: "Sam", lastName: "Fernandes" }; 
obj = JSON.stringify(dataJSON); 
console.log(obj ,  typeof(obj)); 
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 
 