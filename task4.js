
// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


var a = isNaN('11');
console.log(a); // false

var a = isNaN(2 - 10);
console.log(a); // true

// isNaN() function is used to check whether a value is an illegal number or not. It returns true if the value is NaN, otherwise it returns false. In the first code, the value is a string, so it is not a number, and the function returns false. In the second code, the value is a number, so the function returns true.