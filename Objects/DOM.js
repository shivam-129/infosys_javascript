// So, how does the Node relationship helps in Node manipulation?

// These nodes appear in a hierarchical structure inside the browser. And this hierarchical relationship between the nodes allows us to traverse through the DOM tree. 

// The top node is called the root. It does not have any parents. 

// Every other node in the tree belongs to one parent. 

// Every node may have several children. 

// Nodes with the same parent are referred to as siblings. 

///////////////


// parentNode 

// Returns a Node object that is the parent node of the specified node. This property can be retrieved and cannot set it. 


//Returns Node onject<html>
console.log(document.body.parentNode )

////////////////


// childNodes


// Returns NodeList object, i.e collection of child nodes of the specified node. 
// Each child can be accessed by an index number that refers to its position inside the parent element. The first position is at index '0'.

//Returns NodeList object consisting of nodes: h1 and p 
console.log(document.body.childNodes )

/////////////////

// firstChild 

// Returns Node object which is the first child of the specified node. Its is equivalent to childNodes[0]. 

{/* <div id="div1"><h1></h1><p></p><div></div> */}
console.log(    document.getElementById("div1").firstChild)

// Note: Whitespace inside elements is considered as text, and text is considered as nodes.

/////////////////////



// lastChild 

// Returns Node object which is the last child of the specified node. 

// Example: 

// <div id="div1"><h1></h1><p></p></div> 


document.getElementById("div1").lastChild; //Returns p element


/////////////////



// nextSibling returns the Node object of the node that immediately follows the specified node at the same tree level. 

// Example: 

//  <div id="div1">
//        <h1 id="heading1"></h1><p id="para1"></p>
//    </div>
        let elem=document.getElementById("heading1").nextSibling;
        console.log(elem);
//Returns p element 



/////////////




// previousSibling 

// Returns the Node object of the node that the previous node of the specified node at the same tree level.  

// Example: 

// <div id="div1"> 
//     <h1 id="heading1"></h1><p id="para1"></p> 
//         
// </div> 

//Returns h1 element
           console.log(document.getElementById("para1").previousSibling;); 
// Note: Whitespace inside elements is considered as text, and text is considered as nodes.

 

// Please note: 

// Similar to all these properties of Node object, you also have properties such as parentElement, firstElementChild,
//  lastElementChild, nextElementSibling and previousElementSibling.

// The difference is that element properties return only the Element object whereas node properties return element, text, and attribute nodes with respect to the specified node.
//  Also, whitespaces are considered as '#text' nodes by the node properties. 



////////////////////////


// The node relationship allows to modify the tree of nodes by adding new nodes and removing the existing nodes if required. 

// For the given HTML page, below methods will do the following: 

// Create a new element 

// Create new content 

// Add new content to the new element 

// Add a new element to the existing DOM tree 

// HTML code: 

{/* <div id="div1"> 
    <h1 id="heading1">Hello World</h1> 
    <p id="para1">Good luck!!</p> 
</div> 
<br> 
<input type="button" value="Add span" onclick="createNew()"> 
<input type="button" value="Remove para" onclick="removeOld()">  */}



///////////////////




// createElement() 

// Creates a new element. 

// Example: 

let newElement = document.createElement('span'); 


// createTextNode() 

// Creates content at runtime. This node then can be appended to any node that can hold content. 

// Example: 

let newTextElement = document.createTextNode('The span is added just now');


// appendChild() 

// Appends a newly created element to the existing DOM tree at the desired position.  

// Example: 

newElement.appendChild(newTextElement);
document.getElementById('div1').appendChild(newElement);


// removeChild() 

// Removes the element from the existing DOM tree. 

// Example: 

document.getElementById('div1').removeChild(document.getElementById('para1')); 
 







////////////////













/////////////////






