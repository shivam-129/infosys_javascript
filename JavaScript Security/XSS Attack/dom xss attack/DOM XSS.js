// Document Object Model Cross-site scripting (DOM XSS)

// Each HTML document will have a DOM (Document Object Model) connected with it which comprises objects that signify the 
// properties of that document. Any client-side script execution can use the DOM of the HTML page and the script can access 
// the properties of that page and be able to change the values accordingly.

// DOM XSS is a variety of cross-site scripting weakness that executes in the DOM instead of part of the HTML.
//  DOM-based XSS is also known as Type-0 XSS. It is an XSS attack where the attacker modifies the victim’s browser's DOM environment
// / and thereby modifying it and thus the client-side code executes in an unexpected way.

// Whenever the web application writes data to the DOM without proper sanitization, it is possible for a DOM-based XSS attack.
//  The attacker can inject malicious JavaScript code to manipulate the data on the web page.




/////////




// Let us understand, how a DOM-based XSS attack can be performed on a web application:

// The attacker provides a malicious script as part of the user input
// The application uses this malicious user input directly to modify page content dynamically through DOM change.
// The browser then executes the wicked script injected into the page, thereby resulting in an attack.

 

// Another scenario of DOM XSS is

// The attacker constructs a URL by adding a wicked script and directs it to the target user.
// The target user is trapped by the attacker into inviting the URL from the website.
// The website accepts the request but the wicked string is not present in the response.
// The browser of the target user executes the script, triggering the wicked script to be injected into the page.
// The target user's browser then executes the wicked script injected into the page, thereby sending his
// cookie information to the attacker's server.









//////////////












// Let us understand what are the sources and sinks in a DOM-based XSS attack.

// Sources: The assets read from the DOM is named as a source. To achieve a DOM XSS attack, a script can be injected into this asset.

// The below table gives some of the DOM properties that are frequently misused for DOM-based XSS attacks. Some of the best-known sources that are generally misused for DOM-based XSS are: 

// Source name

// Property

// document

// document.URL

// document.documentURI

// location

// location.href

// location.search

// Referrer

// document.referrer

// Window Name

// window.name

 

// Sinks: The points in data flow at which the untrusted input gets executed by JavaScript within the page is named as a sink. Some of the best-known sinks that are generally misused for DOM-based XSS are: 

// Sink Name

// Property

// HTML element Sink

// document.write

// document.writeIn

// innerHTML

// outerHTML

// Execution Sink

// eval

// setTimeout

// setInterval

// Set Location sink

// location

// location.href

 

// For example, when you insert any text to the DOM using innerHTML property as follows, then that allows a hacker to insert any code into it.

// let comment="New value inserted"
// document.getElementById("msg").innerHTML = comment;
// How to defend against the DOM XSS attack?

// Some of the preventive measures are:

// Prevent the user from clicking any suspicious links

// Keep the browser up to date

// Use JavaScript framework: The latest JavaScript frameworks like Angular and libraries like React uses templates that checks for XSS attacks and do input sanitization.

// Do code auditing: Avoid using the properties and functions like innerHTML, outerHTML, document.write, and better to use innerText, or textContent properties to set text content within the tag.