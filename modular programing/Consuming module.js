// If you want to utilize an exported member of a module, use the import keyword. You can use many numbers of import statements.

// Syntax:

//import multiple exports from module
// import {entity1, entity 2... entity N} from modulename;
//import an entire module's contents
// import * as variablename from modulename;
//import an export with more convenient alias
// import {oldentityname as newentityname } from modulename;

// Example:

import {var1,var2} from './mymodule.js';
import * as myModule from './mymodule.js';
import {myFunction as func} from './mymodule.js';
 

////////



// You can import a default export with any name.

// Syntax:

// import variablename from modulename;
// Example:

import myDefault from './mymodule.js';
 