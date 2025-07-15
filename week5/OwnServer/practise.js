const express = require("express");
const app = express();



// Lets use middleware in it
let reqCount = 0;
function countRequest(req, res, next) {
  reqCount += 1;
  console.log(`Request Count: ${reqCount}`);
  req.name = "Hariom";
  console.log(req.method);
  console.log(req.name);

  next();
}

app.use(countRequest);



// Get Sum
app.get("/sum", function(req, res) {
  const num1 = Number(req.query.a);
  const num2 = Number(req.query.b);

  const sum = num1 + num2;

  res.json({
    Addition: sum
  })
});


// Get Subtraction
app.get("/subtraction", function(req, res) {
  const n1 = Number(req.query.a);
  const n2 = Number(req.query.b);
  const minus = n1 - n2;

  res.send(`Substration of ${n1} and ${n2}: ${minus}`);
});


// Get Multiply
app.get("/multiply", function(req, res) {
  const n1 = Number(req.query.a);
  const n2 = Number(req.query.b);
  const multiply = n1 * n2;

  res.send(`Multiplication: ${multiply}`);
});


// Get Division
app.get("/division", function(req, res) {
  const n1 = Number(req.query.a);
  const n2 = Number(req.query.b);
  const division = n1 + n2;

  res.send(`Division: ${division}`);
});


app.listen(3000);