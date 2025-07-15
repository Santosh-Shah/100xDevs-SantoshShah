const user = {
  name: "Santosh",
  age: 22,
  isStudent: true
};

// console.log(user.name);
// console.log(user.isStudent);
// console.log(user.age);


// some methods of objects
console.log("Name of keys: " + Object.keys(user));
console.log('Name of values: ' + Object.values(user));
console.log("names" in user);
console.log("name" in user);
