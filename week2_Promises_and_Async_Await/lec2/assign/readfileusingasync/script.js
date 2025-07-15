// Defining your own async function
// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file


const fs = require("fs");

// let output = fs.readFileSync("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt", "utf-8");
// console.log(output);
// output = output.trim();
// console.log(output);



function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function readMyFile() {
  await setTimeoutPromisified(5000);
  let output = fs.readFileSync("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt", "utf-8");
  console.log(`Before Triming: ${output}`);
  output = output.trim();
  console.log(`After Triming: ${output}`);


  fs.writeFileSync("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt", output, "utf-8");
  console.log("✅ File has been trimmed and written back.");

}

readMyFile();

console.log("This is me");





// function readTheFile(sentTheFileValueHere) {
//   fs.readFile("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt", "utf-8", function(err, data) {
//     sentTheFileValueHere(data);
//   })
// }


// function readFile(name) {
//   return new Promise(readTheFile);
// }

// const p = readFile("week2_Promises_and_Async_Await/lec2/assign/readfileusingasync/a.txt");


// function callback(contents) {
//   console.log("Contents of this file: " + contents);
// }


// p.then(callback);



