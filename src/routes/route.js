const express = require("express")
const router = express.Router()

const {collegeController,internController}=require("../controller")
const {middleware}=require("../middleware")


router.get("/test-me",function(req,res){
    console.log("good")
    res.send("Running server")
})

router.post("/functionup/colleges", middleware.regCollegeMid, collegeController.registerCollege)

router.post("/functionup/interns", middleware.regInternMid, internController.registerIntern)

router.get("/functionup/collegeDetails", collegeController.collegeDetails)


module.exports = router