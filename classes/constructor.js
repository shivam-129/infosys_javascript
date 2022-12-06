

// <!-- 
// In 2015, ECMAScript introduced the concept of classes to JavaScript

// The keyword class is used to create a class 

// The constructor method is called each time the class object is created and initialized. 

// The Objects are a real-time representation of any entity. 

// Different methods are used to communicate between various objects, to perform various operations. 

// Example:

// // The below code demonstrates a calculator accepting two numbers to do addition and subtraction operations. 

// class Calculator {
// 	constructor(num1, num2){  // Constructor used for initializing the class instance
	
// 		/* Properties initialized in the constructor */
// 		this.num1 = num1;
// 		this.num2 = num2;
// 	}
// 	/* Methods of the class used for performing operations */
// 	add() {
// 		return this.num1 + this.num2;
// 	}
// 	subtract() {
// 		return this.num1 - this.num2;
// 	}
// }
// let calculator = new Calculator(300, 100); // Creating Calculator class object or instance
// console.log("Add method returns" + calculator.add()); // Add method returns 400. 
// console.log("Subtract method returns" + calculator.subtract()); // Subtract method returns 200. -->




  
  
  
class Person {
	constructor(name, age) {
		this._pname = name;
		this._page = age;
	}
	display() {
		console.log("name :" + this.pname);
		console.log("age :" + this.page);
	}
	set pname(namePerson) { this._pname = namePerson; }
	get pname() { return this._pname; }
}
let per = new Person();              // line 8
per.pname = "Rexha";                 // line 9
console.log(per.pname);              // line 10
let per1 = new Person("Alex", 10);   // line 11
console.log(per1.pname);             // line 12
 









