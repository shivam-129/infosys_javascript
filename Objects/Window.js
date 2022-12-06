// So far, you know how the content and style for a given HTML page can be modified using the BOM model's object 'document'. 

// Suppose it is not required to update the HTML page but only certain properties of the browser window on which it is rendered. That is to navigate to a different URL and display a new web page, or close the web page or store some data related to the web page. Well, to implement this, an object that represents the entire browser window and allows us to access and manipulate the window properties is required. BOM model provides that 'window' object. 

// This object resides on top of the BOM hierarchy. Its methods give us access to the toolbars, status bars, menus, and even the HTML web page currently displayed. 

// innerHeight 

// This property holds the inner height of the window’s content area. 

// Example: 

let inHeight = window.innerHeight; 
console.log(" Inner height: " + inHeight); 
//Returns Inner height: 402 
// innerWidth 

// This property holds the inner width of the window’s content area. 

// Example: 

let inWidth = window.innerWidth; 
console.log(" Inner width: " + inWidth); 
//Returns Inner width: 1366 
// outerHeight 

// This property holds the outer height of the window including toolbars and scrollbars. 

// Example: 

let outHeight = window.outerHeight; 
console.log(" Outer Height: " + outHeight);
//Returns Outer height: 728
// outerWidth

// This property holds the outer width of the window including toolbars and scrollbars. 

// Example: 

let outWidth = window.outerWidth; 
console.log("Outer width of window: " + outWidth); 
//Returns Outer width: 1366 
 







//////////


// localStorage 

// This property allows access to object that stores data without any expiration date 

// Example: 

localStorage.setItem('username','Bob'); 
console.log("Item stored in localStorage is" + localStorage.getItem('username')); 
//Returns Item stored in localStorage is Bob 
// sessionStorage 

// This property allows access to objects that store data valid only for the current session. 

// Example: 

sessionStorage.setItem('password', 'Bob@123'); 
console.log("Item stored in sessionStorage is " + sessionStorage.getItem('password')); 
//Returns Item stored in sessionStorage is Bob@123 
// Methods

// In addition to these methods, 'window' object gives us a few more methods that are helpful in the following way: 

// open() method, opens a new window. Usage: window.open("http://www.xyz.com"); 

// close() method, closes the current window. Usage: window.close(); 