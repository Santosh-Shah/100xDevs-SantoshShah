const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const JWT_SECRET = "randommongodb679"


mongoose.connect("mongodb+srv://santosh679:4283@cluster0.o9j5em3.mongodb.net/todo-app-database");
const app = express();
app.use(express.json());


// SignUp endpoint
app.post("/signup", async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name
  })

  res.json({
    message: "You are logged in my brother!"
  })
});

// signin endpoint
app.post("/signin", async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password
  });

  console.log(user);

  if (user) {
    const token = jwt.sign({
      id: user._id
    }, JWT_SECRET);

    res.json({
      token: token
    });
  } else {
    res.status(403).json({
      message: "Your are not authorized or Incorrect Cridentials"
    })
  }

});

//post todo one at a time
app.post("/todo", auth, function(req, res) {
  res.json({
    userId: req.userId
  })
})

// get all todos endpointss
app.get("/todos", auth, function(req, res) {
  res.json({
    userId: req.userId
  })
});


function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorret Credentials"
    })
  }
}


app.listen(3000);