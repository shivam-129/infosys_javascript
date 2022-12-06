 // The HTML web page that gets loaded on the browser is represented using the 'document' object of the BOM model. 

// This object considers the web page as a tree which is referred to as Document Object Model(DOM). Each node of this tree represents HTML elements in the page as 'element' object and its attributes as properties of the 'element' object. 

// W3C provides DOM API consisting of properties and methods that help in traversal and manipulation of the HTML page


// Shown below is the HTML web page and it's corresponding DOM structure that can be accessed using DOM API methods and properties: 

// Sample HTML Code:  


//     To access an element in the HTML page, following methods can be used on the 'document' object from DOM.

// getElementById(x)  

// Finds element with id 'x' and returns an object of type element 

// Example: 

    //Selects paragraph having id 'p1'
    document.getElementById('p1'); 
// getElementsByTagName(x) 

// Find element(s) whose tag name is 'x' and return NodeList, which is a list of element objects. 

// Example: 


    document.getElementsByTagName('p'); 







//     getElementsByClassName() 

// Find element(s) whose class attribute's values is 'x' and returns NodeList, which is list of element objects 

// Example: 

    //Selects paragraph having class = "myClass"
    var x = document.getElementsByClassName('myClass'); 
// querySelectorAll() 

// Find element(s) by CSS selectors and return NodeList, which is a list of element objects. 

// Example: 


    var x = document.querySelectorAll("p.blue");
    x[0].innerHTML;     

 


//     Some of the other properties of the 'document' object to access the HTML element are: 

// the body returns body element. Usage: document.body; 

// the forms return all form elements. Usage: document.forms; 

// the head returns the head element. Usage: document.head; 

// the images return all image elements. Usage: document.images; 

// To manipulate the content of HTML page, the following properties of 'element' object given by DOM API can be used: 

// innerHTML 

// It gives access to the content within HTML elements like div, p, h1, etc. You can set/get a text. 



    //retieves current content 
    document.getElementById("heading1").innerHTML;
    //sets new content 
    document.getElementById.innerHTML = "Heading generated dynamically" 
 









//     attribute 

// It is used to set new values to given attributes. 

// Example: 


        document.getElementById("div1").attributes[0].value; 
        document.getElementById("div1").setAttribute('class', 'div2'); 
   



// Initially, no color was applied to the heading, later the class ‘div2’ was added using setAttribute. 

// To manipulate the style of an HTML element, the following property of the 'element' object given by DOM API can be used: 

// style

// It gives access to the style attribute of the HTML element and allows it to manipulate the CSS modifications dynamically. 

// Example: 


    //resets style property 
    document.getElementById("div1").style.color = "red"; 
 


// There are certain methods and properties that allow to traverse the DOM tree and manipulate content or style for the specified node representing the HTML element. -->