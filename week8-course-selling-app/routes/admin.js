const { Router } = require("express");
const adminRouter = Router();


adminRouter.post("/signup", function(req, res) {
  res.json({
    message: "this is from signup page"
  })
})

adminRouter.post("/signin", function(req, res) {
  res.json({
    message: "this is from signup page"
  }) 
})


adminRouter.post("/course", function(req, res) {
  res.json({
    message: "this is from signup page"
  }) 
})

adminRouter.put("/course", function(req, res) {
  res.json({
    message: "this is from signup page"
  }) 
})

adminRouter.post("/course/bulk", function(req, res) {
  res.json({
    message: "this is from signup page"
  }) 
})


module.exports = { adminRouter };
