// Let us understand what are the different methods which can be followed for output encoding:

// 1. Using encoder.js: Using encoder.js JavaScript library you can encode or decode HTML characters. Using the method provided by encoder.js you can encode the HTML characters.  

// Below are the few methods that can be used for output encoding:

// htmlEncode(): Encode an input string into either numerical or HTML entities
// numEncode(): Numerically encodes all Unicode characters
// XSSEncode(): Encodes the basic 4 characters used to malform the HTML in XSS hacks
// Let us understand htmlEncode(), one of the methods from the above:

// In the below code, you have an HTML element where users input the data and that data has to be displayed in the <div> element.

<htmlEncode>
<textarea name="comment" id="comment" cols="100" rows="5"></textarea>
<div id="msg"></div>
</htmlEncode>

// Here, before displaying the data in the <div> element, you need to encode it for the security concern. Hence encode it using a method htmlEncode()as follows:

let comment = Encoder.htmlEncode(document.getElementById("comment").value);

// Now, this can be displayed as follows:

 document.getElementById("msg").innerHTML = comment;
// In case, it is not encoded then it is recommended to always use innerText or textContent. Because using these properties can prevent XSS attacks.

 


 