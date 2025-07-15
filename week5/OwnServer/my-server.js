
  const express = require("express");

  const app = express();
  
  let reqCount = 0;

  function reqCountFun(req, res, next) {
    reqCount = reqCount + 1;
    console.log(`Request Count: ${reqCount}`);
    req.name = "Santosh Shah";
    console.log(req.name);
    next();
  }

  app.use(reqCountFun);


  app.get("/sum", function(req, res) {

    // reqCountFun();

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    // console.log(req.name)
    // console.log(a, b);
    res.json({
      ans: a + b
    })
  });

  app.get("/multiply", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(`result: ${a * b}`);
  });

  app.get("/divide", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(`result: ${a / b}`);
  });

  app.get("/subtract", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(`result: ${a - b}`);
  });

  app.listen(3001);