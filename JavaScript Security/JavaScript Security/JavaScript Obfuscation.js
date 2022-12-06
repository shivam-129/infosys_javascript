// JavaScript is a browser interpreted language and anyone can see the source code of the web page where the script is running.
//  Anyone can steal the code, modify it, and reuse it in their application. Cybercriminals are developing more innovative techniques to 
//  attack websites. In order to protect the JavaScript code, you can obfuscate it to encrypt the code and thus making it safe from hackers 
//  and attackers.

// The process of going through the source code methodically and then transforming the code by making it impossible to read is named 
// Obfuscation. In this process, the variables will be renamed, the algorithm or the data structures used in the code will be hidden and 
// the entire code will be rearranged. This process creates a protected version of the code which is extremely difficult to understand 
// and no one could steal or modify it as well.

// This process masks the business logic of the application from attackers and also reduces the file size considerably thereby
//  fastening the communication between client and server.

// Several tools are available to obfuscate JavaScript code of which some are free and some are paid. Some of these tools will only 
// do obfuscation and some tools provide additional protection as well. Tools like JavaScript Obfuscator, jscambler, etc are commonly used.

// Consider an example JavaScript code before and after the Obfuscation process:

// Before:

// function displayHello(name) {
//     console.log('Hello, ' + name);
// }
// displayHello('User');
// After:

// var _0x522c=["\x48\x65\x6C\x6C\x6F\x2C\x20","\x6C\x6F\x67","\x55\x73\x65\x72"];function displayHello(_0xe044x2){console[_0x522c[1]](_0x522c[0]+ _0xe044x2)}displayHello(_0x522c[2])
 








////////////////////////















// 1. Name Obfuscation: 

// This process replaces all the identifiers, functions, and properties in the code with meaningless and random names. 
// It processes the entire application and ensures consistency across all the files for the name change.



// 2. Minification and Compression:

// This process reduces the JavaScript file size and helps in faster loading of the files. 
// It removes all the unnecessary whitespaces and makes the code more efficient.



// 3. String Encryption:

// This process will encrypt the strings in the code so that attackers can not do any attack by searching for a specific string.



// 4. Code Flow Obfuscation:

// As part of this process, the application control flow itself gets altered, thus making it challenging for the hacker to analyze the code.



// 5. Dead-Code Insertion:

// This process inserts some useless code into the program without affecting the program semantics and this makes 
// the code analysis difficult.



// 6. Powerful Locking:

// This process locks the application code based on the domain name, IP address, etc. 



// It is better to obfuscate JavaScript code as it helps in decreasing the code size and saving the code download time as well. 
// It is really difficult to reverse engineer the obfuscated code and thus you can hide the core logic in our application from hackers
//  and attackers.
