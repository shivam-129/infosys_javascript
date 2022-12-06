// Reflected Cross-site Scripting (XSS) also known as Non-persistent Cross-site Scripting or Non-persistent XSS is a type of XSS where an attacker injects browser executable code through input which is sent back within the HTTP response. The injected code is non-persistent and not stored in the application. 

// The attack payload gets delivered and executed through a single request and response and hence Reflected XSS is also denoted as Type 1 XSS.

// The attacker searches for vulnerable websites in order to attack the site. Once a site is identified as vulnerable, then the attacker will try to inject the script and verify whether the code is returned as such. 

// The core aim of this kind of attack:

// Cookie stealing – attackers steal cookies information and perform extra attacks.

// Data-stealing – attackers read file contents, browser history, directory listings, and plan for further attacks.

// The Reflected XSS attack to a web application occurs as below:

// The attacker sends a malicious script as part of input data

// The application sends back a user-provided malicious script as part of the response.

// The browser interprets malicious script arrived as part of the response 

// The impact will be based on the intent of the malicious script

// Consider a website that can be accessed with the below URL:

// "http://www.mysite.com/index.html?name=John"
// Assume the "name" parameter is used to define the username value, once the user login to the website, the site displays a "Hello John" message. 

// An attacker can exploit the "name" parameter by inserting the mean code to the parameter.

// http://www.mysite.com/index.html?name=<script>alert('XSS attack')</script>
// Consequently, an alert box will be exhibited to the user with the message ‘XSS attack’. Thus the attacker is able to inject any malicious script into the victims' browser as the script gets reflected as such.

// This simple demo doesn't create any damage but just displays the message "XSS attack", but it is clear that an attacker can exploit websites and applications using this mechanism.

 

// Instances of Reflected XSS attack:

// Clickjacking

// SPAM email containing HTML code

// SPAM email containing a malicious link

// Social media posts with a malicious link

 
// How to defend against Reflected XSS attack?
// Defending against this attack can be done on the client-side or server-side.

// 1. Client-side: Some preventive measures on the client-side to defend against this attack are:

// Open the emails which come from a trusted source only

// Avoid installing browser plugins unnecessarily, use only secure browsers

// Do proper sanitization and validation on user input

// 2. Server-side: Some preventive measures on the server-side to defend against this attack are: 

// Do proper validation of user input before sending user data back in the response.

// Sanitize, escape or encode the special chars in user input before sending it back in an HTTP response. This will make sure that the script is rendered harmless