// function sum(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }


// function divide(a , b) {
//   return a/b;
// }


// function doOperations(a, b, op) {
//   return op(a, b);
// }


// console.log(doOperations(5, 6, sum))
// console.log(doOperations(1, 20, subtract))
// console.log(doOperations(50, 5, divide))










// const fs = require('fs');

// function print(err, data) {
//   // console.log(data);
//   if (err) {
//     console.log("Error happened:", err.message);
//   } else {
//     console.log("File content: " + data);
//   }
// }

// fs.readFile('a.txt', 'utf-8', print);
// fs.readFile('b.txt', 'utf-8', print);
// console.log("Done!");


// console.log("Hi");

// function timeout() {
//     console.log("Click the button 5 second");
// }


// function timeout2() {
//   console.log("Click the button 2second");
// }


// setTimeout(timeout, 5000);

// setTimeout(timeout2, 2000);

// console.log("Welcome to loupe");






























const fs = require("fs");

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents); // ✅ Runs later
});

console.log("Reading file..."); // ✅ Runs first



// function run() {
//   console.log("Run after few second");
// }

// setTimeout(run, 3000);
// console.log("Run Immediately");
