const express = require('express');
const app = express();
app.use(express.json());


// function sum(num) {
//   let add = 0;
//   for (let i = 1; i <= num; i++) {
//     add += i;
//   }
//   return add;
// }

const users = [{
  name: "Hari Kumar",
  kidneys: [
    {healthy: true},
    {healthy: false},
    {healthy: true}
  ]
}];



app.get("/", function(req, res){

  const hariKidneys = users[0].kidneys;
  const numbersOfKidneys = users[0].kidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < numbersOfKidneys; i++) {
    if (hariKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }

  const numberOfUnhealthyKidneys = numbersOfKidneys - numberOfHealthyKidneys;
  
  

  res.json({
    numbersOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
});


app.post("/", function(req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })

  res.json({
    msg: "Congratulations! Kidney Added"
  })
});


app.put("/", function(req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({
    msg: "You have now only healthy kidneys"
  })

});


app.delete("/", function(req, res) {
  users[0].kidneys.pop();

  res.json({
    msg: "Your kidneys are reduce by 1 now"
  });
})


app.listen(3000);