

//   Inheritance

//   In JavaScript, one class can inherit another class using the extends keyword. The subclass inherits all the methods ( both static and non-static ) of the parent class.
  
//   Inheritance enables the reusability and extensibility of a given class.
  
//   JavaScript uses prototypal inheritance which is quite complex and unreadable. But, now you have 'extends' keyword which makes it easy to inherit the existing classes.
  
//   Keyword super can be used to refer to base class methods/constructors from a subclass
  
//   Example:
  
// //   The below code explains the concept of inheritance.
  
//   class Vehicle {
//       constructor(make, model) {
//           /* Base class Vehicle with constructor initializing two-member attributes */
//           this.make = make;
//           this.model = model;
//       }
//   }
//   class Car extends Vehicle {
//       constructor(make, model, regNo, fuelType) {
//           super(make, model); // Sub class calling Base class Constructor 
//           this.regNo = regNo;
//           this.fuelType = fuelType;
//       }
//       getDetails() {
//           /* Template literals used for displaying details of Car. */
//           console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
//       }
//   }
//   let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // Creating a Car object 
//   c.getDetails(); 
  
  
  
  
  
  
  