// The HTML sanitization process provides the required protection against cross-site scripting (XSS) attacks by sanitizing the user-submitted HTML code. 

// The process of examining an HTML document and produces a new document that has only safe tags (HTML entities) is defined as Sanitization.

// The tags such as <b>, <i>, <u>, <em>, and <strong>, which are used for changing fonts are often allowed. The sanitization process removes advanced tags like <script> <embed>,<object> and <link>. This process also removes potentially dangerous attributes like 'onclick' attribute in order to prevent malicious code injection into the application.

// Let us understand how to sanitize HTML data. The below table lists the entity names for some of the HTML characters.

// Input Character

// Encoded value

// <

// &lt; or &#60;

// >

// &gt; or &#62

// "	
// &quot; or &#34;

// '	
// &apos; or &#39;

// &	
// &amp; or &#38;

 

// When a web browser comes across these entities, they will not be executed. But instead, they will be changed back to HTML and printed.

// Consider the scenario that an attacker injects the below script into a web page.

// <script>alert("Attacked")</script>
// On using HTML sanitization, the response will be as below.

// &lt;script&gt;alert("Attacked")&lt;/script&gt;
// On downloading the encoded script, the browser will not run the script but instead, convert the script back to<script>alert("Attacked")</script> and display it as part of the web page.

// There are many sanitizer libraries available to do this job. Some of the commonly used libraries are DOMPurify, XSS, and XSS-filters.

 

// Let us understand the usage of the DOMPurify library.

// DOMPurify is an easy to use library for sanitizing HTML code. It is written in JavaScript and works in all modern browsers. This library strip out dangerous HTML and prevents XSS attacks by sanitizing the HTML code. On feeding string full of dirty HTML code to this library returns a string with clean HTML. Many security experts have already reviewed this library and identified that it is the recommended library for HTML sanitization.

// To use this library on the website, just include it as shown below.

//  <script type="text/javascript" src="dist/purify.min.js"></script>
// Any dirty code can be sanitized using the below method.

// var clean = DOMPurify.sanitize(dirty);
// Using document.write() method or using innerHTML property, the resulting HTML code can be written into DOM.

// It is very important to identify a suitable sanitizer library for securing your application. 