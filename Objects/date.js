// The built-in JavaScript object 'Date' allows us to work with dates and times displayed as part of the web page.
//  It can be instantiated wherever required using one of the many constructors available.  

// Example: 

// let dateObject1 = new Date(); 
// console.log("Date is: " + dateObject1);
//OUTPUT: Date is: Thu Jun 18, 2020, 22:17:36 GMT+0530 (India Standard Time) 
// OR 

// let  dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000); 
// console.log("Date is: "+dataObject2); 

//OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 
// After the object of type 'Date' is ready, you can access and use the built-in methods.
//  Most of the methods provided by the object 'Date' aim at getting a specific portion of the current time. 























// Method 	Description 
// getDate() 	Return the numeric day of the month. The value ranges from 1 to 31. 
// getDay() 	Returns numeric day of week. Value ranges from 0 to 6. 
// getFullYear() 	Return four digit year (YYYY). 
// getHours() 	Returns numeric hour. Value ranges from  0 to 23. 
// getMonth() 	Returns numeric month. Value ranges from 0 to 11. 
// getMilliseconds() 	Returns numeric milliseconds. Value ranges from 0 to 999.
// getTime() 	Returns number of milliseconds since 1/1/1970 at 12 a.m. 
 

// Example: 

let dateObject1 = new Date(); 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Day is: " + dateObject1.getDay()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Horrs: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Time is: " + dateObject1.getTime()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 18 
Day is: 4 
Year is: 120 
Horrs: 22 
Month is: 5 
Time is: 1592499518512 
Millisecond: 512 
*/ 
 


























// Setter methods available on object Date are listed below: 

// Method 	Description 
// setDate() 

// Sets the numeric day of the month. Value range from 1 to 31. 
// setFullYear() 	Sets four-digit year (YYYY). 
// setHours() 	Sets numeric hour. The value ranges from 0 to 23. 
// setMonth() 	Sets numeric month.  The value ranges from  0 to 11. 
// setMilliseconds() 	Sets numeric milliseconds. The value ranges from 0 to 999. 
// setTime() 	Sets the number of milliseconds from 1/1/1970  at 12 a.m. 
// Example: 

// let dateObject1 = new Date(); 
dateObject1.setDate(3); 
dateObject1.setYear(1996); 
dateObject1.setHours(8); 
dateObject1.setMonth(7); 
dateObject1.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Hours: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 
 
/////////////////////////////////







// Setter methods available on object Date are listed below: 

// Method 	Description 

// setDate()    // Sets the numeric day of the month. Value range from 1 to 31. 
// setFullYear() 	Sets four-digit year (YYYY). 
// setHours() 	Sets numeric hour. The value ranges from 0 to 23. 
// setMonth() 	Sets numeric month.  The value ranges from  0 to 11. 
// setMilliseconds() 	Sets numeric milliseconds. The value ranges from 0 to 999. 
// setTime() 	Sets the number of milliseconds from 1/1/1970  at 12 a.m. 
// Example: 

// let dateObject1 = new Date(); 
dateObject1.setDate(3); 
dateObject1.setYear(1996); 
dateObject1.setHours(8); 
dateObject1.setMonth(7); 
dateObject1.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Hours: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 
 