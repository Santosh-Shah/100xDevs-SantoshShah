const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const JWT_SECRET = "randomsantosh679"

app.use(cors());
app.use(express.json());
// app.use(express.static("./public"));

const users = [];

function logger(req, res, next) {
  console.log(req.method + ": request came");
  next();
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "./public/index.html");
}); 


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
    // const token = req.headers.token;
    const token = req.headers.authorization;
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
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});

app.listen(3000);
