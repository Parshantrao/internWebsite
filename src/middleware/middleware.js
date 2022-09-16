const validation = require("../validation/validator")


//// Middleware for validation on madatory fields for registering college
const regCollegeMid = function(req,res,next){
    try{
        const requestData = req.body 

        // Extract Data
        let {name,fullName,logoLink,isDeleted}=requestData


        // Validation Starts

        if(!validation.isValidRequestBody(requestData)){
            res.status(400).send({status:false, msg:"Please provide College details"})
            return
        }

        //1.Validation for name
        if(!validation.isValid(name)){
            res.status(400).send({status:false, msg:"name required"})
            return
        }
        if(!validation.isValidString(name)){
            res.status(400).send({status:false, msg:"name must contain letters / String only"})
            return
        }
       // name = name.toLowerCase().trim()
        

        //2.Validation for fullName
        if(!validation.isValid(fullName)){
            res.status(400).send({status:false, msg:"fullName required"})
            return
        }
        if(!validation.isValidString(fullName)){
            res.status(400).send({status:false, msg:"fullname must contain letters / String only"})
            return
        }
        

        //// 3.Validation for logoLink
        if(!validation.isValid(logoLink)){
            res.status(400).send({status:false, msg:"logoLink required"})
            return
        }
        logoLink=logoLink.trim()
        if(!validation.isValidUrl(logoLink)){
            res.status(400).send({status:false, msg:"Invalid logoLnk"})
            return
        }
        /// Validation Ends

        req["modifiedRequestData"] = {name,fullName,logoLink}
        
        next()
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
        return
    }

}




//// Middleware for validation on madatory fields for registering interns
const regInternMid = function(req,res,next){
    try{
        const requestData = req.body 

        // Destructuring
        let {name, mobile, email, collegeName}=requestData
       
            
        // validation starts

        if(!validation.isValidRequestBody(requestData)){
            res.status(400).send({status:false, msg:"Please provide intern details"})
            return
        }

        //1.validation for name
        if(!validation.isValid(name)){
            res.status(400).send({status:false, msg:"name required"})
            return
        }
        if(!validation.isValidString(name)){
            res.status(400).send({status:false, msg:"name must contain letters / String only"})
            return
        }
        //name=name.trim()

       

        //2.validation for email
        if(!validation.isValid(email)){
            res.status(400).send({status:false, msg:"email required"})
            return
        }
        email=email.trim()
        if(!validation.isValidEmail(email)){
            res.status(400).send({status:false, msg:"email must be valid / String only"})
            return
        }

         //3.validation for mobile 
         if(!validation.isValid(mobile)){
            res.status(400).send({status:false, msg:"mobile required"})
            return
        }
        if(!validation.isValidString(mobile)){
            res.status(400).send({status:false, msg:"mobile must contain letters / String only"})
            return
        }
        mobile=mobile.trim()
        if(!validation.isValidMobileNumber(mobile)){
            res.status(400).send({status:false, msg:"mobile must be valid indian phone number "})
            return
        }
       
        //4.validation for collegeName
        if(!validation.isValid(collegeName)){
            res.status(400).send({status:false, msg:"collegeName required"})
            return
        }
        if(!validation.isValidString(collegeName)){
            res.status(400).send({status:false, msg:"collegeName must contain letters / String only"})
            return
        }

        
        req["modifiedRequestData"] = {name, mobile, email, collegeName}
        next()
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
    }
}

module.exports={regCollegeMid,regInternMid}