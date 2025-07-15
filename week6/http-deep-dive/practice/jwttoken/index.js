const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomsantosh679"
const app = express();
app.use(express.json());


// my database using array
const users = [];


function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

function logger(req, res, next) {
  console.log(req.method + ": request came");
  next();
}


app.post("/signup", function(req, res) {
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


app.post("/signin", function(req, res) {
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
  const token = req.headers.token;
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