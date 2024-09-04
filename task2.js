
// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04


let math = 75.25;
let bio = 65;
let chem = 80;
let phy = 35.45;
let bang = 99.50;

let result = (math + bio + chem + phy + bang) / 5;

console.log(result.toFixed(2));
