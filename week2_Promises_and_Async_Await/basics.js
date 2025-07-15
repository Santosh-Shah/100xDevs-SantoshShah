








// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format


const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
console.log(map.get("age"));




















// function sum(a, b) {
//   return a + b;
// }

// let ans = sum(4, 6)
// console.log(ans)


// find the sum from one to 10

// function sumFrom1to10(num) {
//   let sum = 0
//   for (let i=1; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

// let ans1 = sumFrom1to10(5)
// console.log("Output: ", ans1)



// let ans2 = sumFrom1to10(500)
// console.log("Output: ", ans2)



// let ans3 = sumFrom1to10(5000)
// console.log("Output: ", ans3)




// Asynchronous in javascript
// Example with setTimeout() (Asynchronous):
// console.log("Start")

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 3000);

// console.log("End")




// 🔄 Callback Function
// A callback is a function passed as an argument to another function, and called later.


// function greet(name, callback) {
//   console.log("Hello! " + name)
//   callback();
// }

// function sayGoodBye() {
//   console.log("Good Bye");
// }

// greet("Santosh Shah", sayGoodBye)


















// I/O heavy operations
// const fs = require("fs");

// fs.writeFileSync("week2_Promises_and_Async_Await/b.txt", "Hello from node.js");

// console.log("From TOp");
// let content = fs.readFileSync("week2_Promises_and_Async_Await/b.txt", 'utf-8');
// console.log(content);
// console.log("From Buttom")

// let content2 = fs.readFileSync("week2_Promises_and_Async_Await/b.txt");   // without utf-8
// console.log(content2);














const fs = require("fs");


// Synchronously
// let content1 = fs.readFileSync("week2_Promises_and_Async_Await/a.txt", 'utf-8');
// console.log(content1);


// let content2 = fs.readFileSync("week2_Promises_and_Async_Await/b.txt", 'utf-8');
// console.log(content2);

// let content3 = fs.readFileSync("week2_Promises_and_Async_Await/a.txt", 'utf-8');
// console.log(content3);




// Asynchronously
// fs.readFile("week2_Promises_and_Async_Await/a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("week2_Promises_and_Async_Await/b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("week2_Promises_and_Async_Await/a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

