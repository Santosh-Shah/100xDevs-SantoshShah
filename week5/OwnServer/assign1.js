const express = require('express');
const app = express();

function showHttpUrlTimestamp(req, res, next) {
  const date = new Date();
  console.log(`Current Date and Time of Nepal: ${date.toISOString()}`);

  const http = req.method;
  console.log(http);

  console.log(req.url);
  next();

  // const date = new Date();
  // console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${date.toISOString()}`);
  // next();
  
}


app.use(showHttpUrlTimestamp);

app.get('/sum', function(req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  // res.json(
  //   {
  //     Output: a + b
  //   }
  // );

  res.send(`Output: ${a + b}`);
})


app.listen(3000);