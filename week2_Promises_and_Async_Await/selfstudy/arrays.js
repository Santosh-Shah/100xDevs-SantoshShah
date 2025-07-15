const fruits = ["apple", "mangos", "banana"];
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[1]);

fruits.push("Cars");
// fruits.pop();
fruits.unshift("Moto");
// console.log(fruits.includes("Moto"));

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}






// Arrays of objects
const users = [
  {
    name: "Hariom Shah",
    age: 20,
    school: "National Infotech"
  },
  {
    name: "Santosh Shah",
    age: 22,
    school: "Vedas College"
  },
  {
    name: "Shyam Shah",
    age: 15,
    school: "Miniland Sec. Eng. School"
  }
];

// console.log(users[0])
// console.log(users[2]);
// console.log(users[1]);

// console.log("--------------------------")
// console.log(users[2].name)


// console.log("-----------------------")
// get all names
// const names = users.map(user => user.school);
// console.log(names);