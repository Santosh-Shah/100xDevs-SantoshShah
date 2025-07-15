class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}


const rect = new Rectangle(4, 8, "Red");
console.log(rect.area())
rect.paint();