// below is similar to this
// setTimeout(callback, 5000);


// (function() {
//   console.log("Hello");
// })();


// const ans = function() {
//   console.log("Hello");
// };

// ans();


// function promiseCall(resolve) {
//   setTimeout(resolve, 3000);
// }

// function main() {
//   console.log("This is from main function");
// }

// promiseCall(main)





// console.log("TOp");

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }


// console.log("Between");
// setTimeoutPromisified(3000).then(callback)
// console.log("Button");













// class Promise2 {
//   constructor(fn) {
//     const afterDone = () => {
//     this.resolve();
//   }


//     fn(afterDone);
//   }
  
//   then(callback) {
//     this.resolve = callback;
//   }
// }

// function readTheFile(resolve) {
//   setTimeout(function () {
//     console.log("callback based setTimeout completed");
//     resolve();
//   }, 3000);
// }

// function setTimeoutPromisified() {
//   return new Promise2(readTheFile);
// }

// let p = setTimeoutPromisified();

// function callback() {
//   console.log("callback has been called");
// }

// p.then(callback);





// function promiseFn(resolve) {
//   let c = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     c++;
//   }

//   resolve("Hi Santosh");
// }

// const p = new Promise(promiseFn)

// function printFn(str) {
//   console.log("This is to be printed:" + str);
// }

// p.then(printFn);








const fs = require("fs");

function afterDone(err, contents) {
  if (err) {
    console.log("Error while loading file:")
  } else {
    console.log("Your Content: " + contents);
  }
}


fs.readFile("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt", "utf-8", afterDone);