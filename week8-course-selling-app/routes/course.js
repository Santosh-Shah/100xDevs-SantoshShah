const { Router } = require("express");
const courseRouter = Router();


  courseRouter.post("/purchase", function(req, res) {
    res.json({
      message: "this is from course purchase page"
    })
  })

  courseRouter.get("/preview", function(req, res) {
    res.json({
      message: "this is from course preview page"
    })
  })




module.exports = { courseRouter };

// module.exports = {
//   courseRouter: courseRouter
// }