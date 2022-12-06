

// Injecting unsanitized input into a web application results in the XSS attack. 
//Some of the options to inject XSS attack into a web application are below:

// <script> tag: 
        //The <script> tag is the one of the direct XSS payload.
        // It is possible to reference an external JavaScript code within the <script> tag or JavaScript code can be directly 
        //embedded within the <script> tag.


// JavaScript events: 
        //Another common XSS attack vector is event attributes.
        // The event attributes such as "onload" and "onerror" can be used in diverse tags.

// <b onmouseover=alert('Test!')>click me!</b>
// <body> tag: It is possible to deliver an XSS payload inside the <body> tag by using event attribute or other attributes like background attribute.
// <body onload=alert('test')>
// <img> tag: Ths XSS attack can happen on executing the JavaScript code found in the <img> attributes as well.

// <input> tag: On setting the type attribute of the <input> tag as an image, then it is possible to manipulate it and embed the script. 