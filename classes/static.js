


// Static methods can be created in JavaScript using the static keyword like in other programming languages. Static values can be accessed only using the class name and not using 'this' keyword. Else it will lead to an error.

// In the below example, display() is a static method and it is accessed using the class name.

	class Calculator {
			constructor(num1, num2) {  // Constructor used for initializing the class instance
				/* Properties initialized in the constructor */
				this.num1 = num1;
				this.num2 = num2;
			}
			/* static method */
			static display() {
				console.log("This is a calculator app");
			}
			/* Methods of the class used for performing operations */
			add() {
				return this.num1 + this.num2;
			}
			subtract() {
				return this.num1 - this.num2;
			}
		}
		/*static method display() is invoked using class name directly. */
		Calculator.display(); 
  -->













