const express = require('express');
const app = express();

let countRequests = 0;

function reqCountMiddleware(req, res, next) {
  countRequests = countRequests + 1;
  console.log(`Request Count: ${countRequests}`);
  next();
}

app.use(reqCountMiddleware);

app.get('/sum', function(req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.send(`Output of total sum: ${a + b}`);
})

app.get('/reqCount', function(req, res) {
  res.send(`Total requests till now: ${countRequests}`);
})



app.listen(3000);