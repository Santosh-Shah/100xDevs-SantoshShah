// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }

//   present() {
//     return "i have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }

//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());






// class Shape {
//   constructor() {
//     console.log("This is Constructor is from Shape class");
//   }

//   describe() {
//     console.log("I am a shape");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();   // call parent constructor(if needed)
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }


// const c = new Circle(5);
// c.describe();
// console.log(c.area())






// 🧱 Static Methods
// Used on the class itself, not on the object

class MathUtil {
  static add(a, b) {
    return a + b;s
  }
}


// const addObj = new MathUtil;
// let output = addObj.add(5, 4);
// console.log(output);

console.log(MathUtil.add(10, 15));










// 👁️‍🗨️ Getters and Setters
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}


const p = new Person("Hariom");
console.log(p.name);
p.name = "Santosh";
console.log(p.name);
