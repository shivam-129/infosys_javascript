// Cross-Site Scripting (XSS) is the most hazardous attack and the most frequently found weaknesses in web applications. E-Commerce and banking sites are the most common targeted with XSS. Because its ability to read and change the information sent by the victim (bank account number, credit card details, etc.) makes it perfect for a higher ROI (Return On Investment). Any site with dynamic content is a potential victim of XSS since it affects the company's reputation and customers as well. 

// Hence preventing XSS is very important in the application and here is the Output encoding as the ultimate solution for preventing XSS.

// Output encoding

// Output encoding is the process of encoding HTML control characters into their corresponding representatives which is insignificant in the target interpreter. This is the best mitigation against Cross-site scripting attacks.

// This process of output encoding transforms untrusted input into a harmless form, where the input is showed as data to the user without executing as code in the browser. 

// For example, if the untrusted input has to be displayed in an HTML element, then it should be encoded i.e. HTML encoding.

// First, let us understand what is untrusted data and the sources of untrusted data. 

// Untrusted Data: Any data which comes from the user input or any other untrusted resources which cannot be controlled is defined as untrusted data.

// Untrusted data could be which comes from an HTTP request, form controls, cookies, form URL parameters, and headers. Also, the data which comes from databases, web services, and other sources is frequently untrusted from a security perspective.

// Let us understand the different contexts of Output encoding.

// Encoding/Escaping: Encoding is the way of escaping user input characters so that the browser reads it as data only and not as code. HTML escaping is the most familiar type of encoding in web development, which converts HTML characters.

// 1. Should not put untrusted data except in allowed locations:

// Example: In<script> tag

// <script> Should not put untrusted data here </script>
// 2. Escape HTML before injecting mistrusted data into HTML element

// Example: In <div>, <p>, <td> and other HTML elements

// <div>
// Escape untrusted data before inserting here
// </div>
// 3. Attribute escape before injecting mistrusted data into HTML common attributes

// Example: In attributes "width", "value", "name", etc

// <input value="Escape untrusted data before inserting here"/>
