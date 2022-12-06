
//   Subclassing Built-ins

//   The keywords, class and extends, help developers to create classes and implement inheritance in the application where user-defined classes can be created and extended. Similarly, the built-in classes can be subclassed to add more functionality.
  
//   Example:
  
//   To display the array items, the built-in Array class can be extended as mentioned below.
  
  class MyArray extends Array {
      constructor(...args) {
        console.log(args , ...args)
          super(...args);
      }
      display() {
          let strItems = "";
          for (let val of this) {
              strItems += `${val} -`;
          }
          console.log(strItems);
      }
  }
  let letters = new MyArray("Sam", "Jack", "Tom");
  letters.display(); 
//   Note that display is not the method present in Array built-in class. The MyArray subclasses the Array and adds to it. The output of the above code is given below.
  
//   Sam Jack Tom
  
   
  
//    Best Practice: Class methods should be either made reference using this keyword or it can be made into a static method. 