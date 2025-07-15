// const fruits = ["hello", "hii", "Hello"];
// console.log(fruits);

// changing the data
// fruits[1] = "hiiii";

// adding new data
// fruits.push("Good");

// removing the last one
// fruits.pop();

// Adding to the Start
// fruits.unshift(5);

// Removing the First Element
// fruits.shift();


// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });



// storing objects into array
const users = [
  {name: "Santosh Shah", password: 124536},
  {name: "Hariom Shah", password: 456789}
];


users.push(
  {name: "Omprakash", password: 124536},
  {name: "Jay Prakash", password: 456789}
);

users[1].heello = "Hello";

// console.log(users.length);
// console.log(users[0]);
// console.log(users[1]);

// const found = users.find(user => user.name == "omprakash");
// if (found) {
//   console.log("Yes! i have found user: ", found);
// } else {
//   console.log("No! i don't");
// }

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}