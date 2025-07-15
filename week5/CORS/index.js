const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/week5/CORS/index.html');
// })

app.post('/sum', function(req, res) {
  const a= parseInt(req.body.a);
  const b= parseInt(req.body.b);


  res.json({
    Answer: a + b
  });
})



app.listen(3001);