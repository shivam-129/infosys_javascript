// new Promise(function (resolve, reject) {
// 	setTimeout(square = (x) => resolve(x * x), 5000);
// }).then(function (data) { console.log(data); });
// square(5);





new Promise(function (resolve, reject) {
	let b;
    console.log('1 prmise')
	setTimeout(compute = (a) => resolve(a + b), 1000);
    console.log('2 prmise')

	b = 25;
}).then(function (data) { console.log(data); });

console.log('3 prmise')
compute(5);
console.log('4 prmise')
