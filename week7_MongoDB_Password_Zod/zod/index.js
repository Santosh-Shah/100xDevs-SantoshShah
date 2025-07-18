const express = require("express");
const bcrypt = require("bcrypt");
const z = require("zod");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const JWT_SECRET = "randommongodb679"


mongoose.connect("mongodb+srv://santosh679:4283@cluster0.o9j5em3.mongodb.net/todo-app-database");
const app = express();
app.use(express.json());


const signup = z.object({
  email: z.email(),
  password: z.string().min(5),
  name: z.string().min(7),
});

// SignUp endpoint
app.post("/signup", async function(req, res) {
  // const email = req.body.email;
  // const password = req.body.password;
  // const name = req.body.name;


    const parsed = signup.safeParse(req.body);

    if(!parsed.success) {
      return res.status(400).json({error: "Invalid Input Formate"});
    }


    // instead of writing like this

    // const email = parsed.data.email;
    // const password = parsed.data.password;
    // const name = parsed.data.name;

    const { email, password, name } = parsed.data;


      // hashing here
    const hashed = await bcrypt.hash(password, 5);
    console.log(hashed);

    await UserModel.create({
      email: email,
      password: hashed,
      name: name,
    });


  res.json({
    message: "You are logged in my brother!"
  })
});

// signin endpoint
app.post("/signin", async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;


    // it will return user's data
  const user = await UserModel.findOne({
    email: email
  });

  if(!user) {
    res.status(403).json({
      message: "User does not exit in you database, Sorry boy!"
    })
  }

  // it will print user's data
  console.log(user);


  // it will return True or False
  const passwordMatch = await bcrypt.compare(password, user.password);

    // it will print True or False
  console.log(passwordMatch);

  if (passwordMatch) {
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
    return res.status(403).json({
      message: "Incorret Credentials"
    })
  }
}


app.listen(3000);