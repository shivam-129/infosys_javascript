// Most of the attacks in JavaScript occurs by exploiting vulnerabilities present in web applications. An attacker may inject malicious 
//JavaScript code into an existing file or edit the HTML content of the web application and invoke a third-party JavaScript file that 
//has the malicious code.

// One of the prominent security issues in webpages on the internet is malicious JavaScript code and it creates a severe impact as well. 
//When comparing to different types of network attacks, it is tough to detect malicious JavaScript code as an attacker can inject malicious code in different ways. Also, the code will get interpreted by the browser immediately. 
//This allows JavaScript attacks to exploit many types of weaknesses in the browser's environment.

// Consider the below realities to understand the probability of JavaScript being malicious:

// JavaScript can access user's sensitive information like cookies
// JavaScript can send HTTP requests to different destinations using XMLHttpRequest or any other tool
// JavaScript can transform the HTML content of a web page using different DOM (Document Object Model) manipulation methods

// Severe security breaches may take place in the web application because of these facts. If an attacker can inject illogical JavaScript into a web page served by a website, then the security of the website and the users visiting that website have been compromised.
 


///////////




// Let us understand the penalties of wicked JavaScript code injection into applications.

// The attacker can accomplish the diverse types of attacks by executing illogical JavaScript in the user's browser.

// 1. Keylogging: The hacker can send the user's keystrokes to his server, and henceforth record sensitive information such as passwords and credit card numbers.
// 2. Cookie theft: The hacker can access the target user's cookie associated with the website and thus extract sensitive information using it.
// 3. Phishing: The hacker can insert a fake login form into the target's page and then get the form data submitted to his server and acquire sensitive information like a password.


/////////





// Let us look at the JavaScript language-level security challenges and the other common flaws in web applications.

// Language level security aspects

// Let us look at some of the JavaScript specific security issues.

// 1. JavaScript is inherently a global language

// Variables in JavaScript are in the global namespace by default. The variables which are in the global scope can lead to security flaws.
// Functions that are in the global scope are also dangerous.

// For example: Let us consider the below global function:

var emp = {
	name: 'RM',
	details:function(){
		alert(emp.name);
	}
};
// The global function can be called from the browser and attackers might find a way to enter into the code. 
//There are several approaches to avoid this and one of the most popular ones is revealing module pattern.

// The above function could be modified as follows, 

var emp = (function(){
    var name="user1";
    function details(){
    alert(name);
    }
    return {
        details:details,
        name:"user2"
    }
})()
// What is written here is a module, which protects the code from being accessed from the outside.

 ///////

// 2. ES6 (ECMAScript) added support for template literals, in general, which are very useful. However, 
//this also allows attackers to use this functionality to bypass protection measures against the very common attack and leads to 
//a dangerous attack called cross-site scripting (XSS).

// For example:

template= `Converted:${alert("converted to alert")}`;
// In the above code, ${} evaluates the content and generates JavaScript dynamic code alert() with value as shown below:

// Here, if the user provides malicious input then that gets executed as part of this code. Hence, as a security measure,
// it is good practice to sanitize and validate user input before using it in processing.


/////////
 

// 3. Should not use JavaScript's eval() function:

// The eval () function executes or evaluates an expression as a code. It is more dangerous when it is invoked on a string that is constructed partially from user input. Also improper usage of eval() opens your website to injection attacks.

// For example:

console.log('al' +  'ert(\'' + 'String Converted to alert()' + '\')'); 
// The above line logs the content alert('String Converted to alert()') to the console.

 

// But when the same content is passed as an argument to the eval() function as follows:

eval('al' +  'ert(\'' + 'String Converted to alert()' + '\')'); 
// The above string gets converted to JavaScript code; hence it alerts with the content String Converted to alert() as follows:


////////



// 4. JavaScript is a weakly typed language: You do not have an explicit strict type for a particular variable in JavaScript.

// Example: 1+1 can be 2 or 11 depending on circumstances
 


////////////



// Some of the most common types of attacks through JavaScript are:

// 1. Vulnerable code injection through Cross-Site Scripting (XSS) attack: Attackers can embed malicious JavaScript into a 
//vulnerable website and it gets executed in the user's browser when they visit the site.

// 2. Cross-Site Request Forgery (CSRF) attack: The attacker can steal the website visitor’s session cookie information.

// 3. Server-side JavaScript Injection: This kind of attack mainly targets the server-side. The attacker may inject harmful 
//binary files into the webserver. As JavaScript language is used for server-side application development as well through the 
//Node.js platform, it is essential to prevent this attack.

 