const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");


const JWT_SECRET = "randomsantosh679"
const app = express();
app.use(express.json());
app.use(cors());


// my database using array
const users = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "./front_backend/index.html")
});


function logger(req, res, next) {
  console.log(req.method + ": request came");
  next();
}


app.post("/signup", logger, function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    msg: "Hey! you have signed up"
  })

  console.log(users);

});


app.post("/signin", logger, function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  
  if(foundUser) {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET);

    foundUser.token = token;
    res.json({
      token: token
    });
  } else {
    res.status(403).send({
      message: "Invalid username and password"
    })
  }

  console.log(users);
});


function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.json({
      message: "You have incorrect or missing token"
    })
  }

  const decodedInfo = jwt.verify(token, JWT_SECRET);

  if (decodedInfo.username) {
    req.username = decodedInfo.username;
    next();
  } else {
    res.json({
      message: "Your are not logged in"
    })
  }
}


app.get("/me", logger, auth, function(req, res) {
  let userFound = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      userFound = users[i];
    }
  }

  if (userFound) {
    res.json({
      username: req.username,
      password: userFound.password,
      message: "Your Password is safe now"
    })
  }
});

app.listen(3000);