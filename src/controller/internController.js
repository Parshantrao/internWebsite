const {collegeModel,internModel}=require("../models")
const mobileRegex = /^[6-9]\d{9}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validation = require("../validation/validator")

// ### POST /functionup/interns
// - Create a document for an intern. 
// - Also save the collegeId along with the document. Your request body contains the following fields - { name, mobile, email, collegeName(abbr)}
// - Return HTTP status 201 on a succesful document creation. Also return the document. The response should be a JSON object like [this](#successful-response-structure) 
// - Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

const registerIntern = async function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try{
        const modifiedRequestData = req.modifiedRequestData 

        // Destructuring
        let {name, mobile, email, collegeName}=modifiedRequestData
        
       
            
       //Checking existed mobile numbers
        const alreadyUsedmobile = await internModel.findOne({mobile})
        if(alreadyUsedmobile){
            res.status(400).send({status:false, msg:`${mobile} number is already taken`})
            return
        }

       // Checking existed emails
        const alreadyUsedEmail = await internModel.findOne({email})
        if(alreadyUsedEmail){
            res.status(400).send({status:false, msg:`${email} email is already taken`})
            return
        }

        //Getting collegeId
        const college = await collegeModel.findOne({name:collegeName})
        if(!college){
            res.status(400).send({status:false, msg:`${collegeName} College does not exist`})
            return
        }
        modifiedRequestData.collegeId = college._id
        // console.log(modifiedRequestData)

        //registering Intern's Data
        const newIntern = await internModel.create(modifiedRequestData)

        res.status(201).send({status:true, data:newIntern})
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
    }

}






module.exports={registerIntern}