// let companies= ["Google", "Facebook", "Twitter", "Apple"];
// companies.splice(2, 0, "Samsung");
// console.log(companies);



// let myArray=[1,2,4];
// const [first,,last]=myArray;
// console.log(last);




let myArr = [];
for (i = 0; i < 3; i++) {
    myArr.push(function () {
        console.log(i);
    })
}
for (j = 0; j < 3; j++) {
    myArr[j]();
}


// This code will perform the following things.

// 1. In the first loop, it will push the function with console statement into an array, and at end of the loop, i value will be 3.

// 2. In second loop, myArr[j]() will invoke the function inside the Array and prints the value of i.

// So the output will be 3 3 3.