const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomsantosh679"
const app = express()
app.use(express.json());

// array to store users
const users = [];



app.post("/signin", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let userFound = null;

  // checking it into local storage
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      userFound = users[i];
    }
  }

  if (userFound) {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET);

    userFound.token = token;

    res.json({
      token: token
    });
  } else {
    res.status(403).send({
      message: "My friend you have Invalid username or password"
    });
  }

  console.log(users);

});

app.post("/signup", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username : username,
    password: password
  });

  res.json({
    messages: "Now you are good to go for signin- Good Luck"
  });

  console.log(users);

});


app.get("/me", function(req, res) {
  const token = req.headers.token;
  const decodeInfo = jwt.verify(token, JWT_SECRET);
  const username = decodeInfo.username;

  let userFound = null;

  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username) {
      userFound = users[i];
    }
  }

  if (userFound) {
    res.json({
      username: userFound.username,
      password: userFound.password
    });
  } else {
    res.json({
      message: "your token is invalid my friend"
    });
  }

});




app.listen(3000);