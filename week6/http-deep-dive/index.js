const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomsantosh679"

const app = express();
app.use(express.json());

const users = [];

// Generates a simple random token
// function generateToken() {
//   return Math.random().toString(36).substring(2) + Date.now().toString(36);
// }

function logger(req, res, next) {
  console.log(req.method + ": request came");
  next();
}



app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  });

  res.json({
    message: "You are signed up now"
  });

  console.log(users);
});

// Signin endpoint
app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Manual loop to find user
  let foundUser = null; 
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    // const token = generateToken();
    const token = jwt.sign({
      username: username
    }, JWT_SECRET);
    foundUser.token = token;

    res.json({
      token: token
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password"
    });
  }

  console.log(users);
});


function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) {
      res.json({
        message: "you have incorrect or missing token"
      })
    }
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    if (decodedInfo.username) {
      req.username = decodedInfo.username
      next();
    } else {
      res.json({
        message: "Your are not logged in"
      })
    }
}


app.get("/me", logger, auth, function(req, res) {

  // res.header("random", "santosh679");

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
      message: "you password is safe" 
    });
  }


  // const token = req.headers.token;
  // const decodedInfo = jwt.verify(token, JWT_SECRET);
  // const username = decodedInfo.username;
  // let userFound = null;

  // for (let i = 0; i < users.length; i++) {
  //   // if (token == users[i].token) {
  //   //   userFound = users[i];
  //   // }
    
  //   if (username == users[i].username) {
  //     userFound = users[i];
  //   }
  // }

  // if (userFound) {
  //   res.json({
  //     username: userFound.username,
  //     password: userFound.password
  //   });
  // } else {
  //   res.json({
  //     messages: "token Invalid"
  //   });
  // }
});

app.listen(3000);
