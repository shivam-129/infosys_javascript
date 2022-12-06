// Below are some of the best practices that can be followed while JavaScript coding in order to make your code cleaner, shorter, and easier to read.

// Javascript statements does not strictly require semicolon at the end but it is always a good practice to end them with a semicolon.

// Use meaningful names while naming the variables. For boolean variables, try adding 'is' at the beginning such as isComplete, isLoaded etc.

// Avoid redundancy in naming the object and its properties. For example, consider an object 'employee'.

// //Avoid declaring
// let employee = {
// 	employeeId:1,
// 	employeeName:”John”,
// 	employeeSalary:50000
// }
// //Instead declare as
// let employee={
//     id:1,
//     name:”John”,
//     salary:50000
// }

// Use the var keyword for variable declarations when you want them to get hoisted to the top of the program.

// Use let keyword for variable declarations that will change their value over the time and to have block scope.

// const declaration can be used for string variables or simple number, functions or classes which does not need to be changed or value need not to be re-assigned.

// Avoid global declaration of variables for security concerns and optimal memory utilization.

// Use '==='  instead of '==' for strict comparisons.

// Add comments wherever necessary for documentation purpose and do not use to comment the code.

// Use arrow function in place of function expressions whenever you want to preserve the lexical value of 'this'. Arrow functions has a shorter syntax which helps to keep the code clean, shorter and more readable.

// Use template literals to construct strings that have special characters, to concatenate strings and values, and to preserve newlines.

// Use destructuring syntax to extract values from objects, arrays, and store them into individual variables for any processing. This reduces the number of lines of code to be written and also will not modify the original object/array values.

// Use rest operator when you want to pass an indefinite amount of arguments to a function.

// Use spread operator when you want to pass in a set of variables to a function from an array and when you want to concatenate arrays.

// Use async-await instead of promises or callbacks to keep the code short, clean and more readable.

// Use JavaScript classes to write a cleaner and simple code.

// Use for..of loop instead of traditional for loops to iterate over the values of an array and it makes code cleaner and shorter.












/////////////














// Below are the some of the security best practices to be considered during JavaScript coding in order to safeguard the application from different security attacks.

// Keep code up to date.

// Use the up to date or latest version frameworks or libraries for building application.

// Use latest version browser.

// Cookies are to be saved and used safely.

// Sensitive or critical information should not be persisted in cookies.

// Set a proper expiry date while setting cookies.

// Consider encrypting the information stored in cookies.

// Do not use eval() function.

// This function will simplify evaluate the provided value without any check and hence this feature may be misused by the attackers to run malicious code that may result in security attack.

// Use Linters.

// Linters helps to avoid coding mistakes in the application during development stage and thereby improving the code quality. They also detect the programming errors that are common and ensure that best practices are followed in the code. Some of the commonly used Linters are JSLint, JSHint, ESLint etc.

// Use JavaScript security analyzers.

// They are tools that perform code analysis on client-side applications to identify the vulnerabilities in the application. This helps in writing secure code to prevent common security attacks.

// Use JavaScript Obfuscation.

// The Obfuscation techniques help in converting the JavaScript code into a more safe and secure code thereby preventing different types of attacks.