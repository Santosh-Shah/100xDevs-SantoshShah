const { Router } = require("express");
const userRouter = Router();


  userRouter.post("/signup", function(req, res) {
    res.json({
      message: "this is from signup page"
    })
  })

  userRouter.post("/signin", function(req, res) {
    res.json({
      message: "this is from signup page"
    }) 
  })

  userRouter.get("/purchases", function(req, res) {
    res.json({
      message: "this is from signup page"
    })
  })


  // export like this or 
// module.exports = {
//   userRouter: userRouter
// }

module.exports = { userRouter };