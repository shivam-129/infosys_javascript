// Modules are one of the most important features of any programming language.

// In 2015 modules were introduced in JavaScript officially and they are considered to be first-class citizens while coding the application.
// Modules help in state and global namespace isolation and enable reusability and better maintainability.

// We need modules in order to effectively reuse, maintain, separate, and encapsulate internal behavior from external behavior.

// Each module is a JavaScript file.

// Modules are always by default in strict-mode code. That is the scope of the members (functions, variables, etc.) 
//which reside inside a module is always local.
// The functions or variables defined in a module are not visible outside unless they are explicitly exported.
// The developer can create a module and export only those values which are required to be accessed by other parts of the application.

// Modules are declarative in nature:
// The keyword "export" is used to export any variable/method/object from a module.
// The keyword "import" is used to consume the exported variables in a different module.

/////////


// creating


// The export keyword is used to export some selected entities such as functions, objects, classes, or primitive values from 
//the module so that they can be used by other modules using import statements.

// There are two types of exports:

// Named Exports (More exports per module)                 
// Default Exports (One export per module)



///////////

// named export


// Named exports are recognized by their names. You can include any number of named exports in a module.

// There are two ways to export entities from a module.

//1. Export individual features

//Syntax:

// export let name1, name2, …, nameN; // also var, const
// export let name1 = …, name2 = …, …, nameN; 
// export function functionName(){...}
// export class ClassName {...}
// Example:

// export let var1,var2;
// export function myFunction() { ... };
 

// 2. Export List

// Syntax:

// export { name1, name2, …, nameN };

// Example:

// export { myFunction, var1, var2 }; 
 



//////////






// export 




// The most common and highly used entity is exported as default. You can use only one default export in a single file.

// Syntax:

// export default entityname;
// where entities may be any of the JavaScript entities like classes, functions, variables, etc.

// Example:

// export default function () { ... } 
// export default class { .. }

// You may have both default and named exports in a single module.