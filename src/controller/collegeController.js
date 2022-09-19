const collegeModel = require("../models/collegeModel")
const CollegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
const validation = require("../validation/validator")


// - Create a college - a document for each member of the group
// - The logo link will be provided to you by the mentors. This link is a s3 (Amazon's Simple Service) url. Try accessing the link to see if the link is public or not.
// - Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

const registerCollege = async function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try{
        const modifiedRequestData = req.modifiedRequestData

        // Extract Data
        let {name}=modifiedRequestData

        // check for duplicate college
        
        const isNameAlreadyUsed = await collegeModel.findOne({name}) //{name:name} object shorthand property
        if(isNameAlreadyUsed){
            res.status(400).send({status:false, msg:`${name} name is already taken`})
            return
        }
        
        //Registering College
        const newCollege = await collegeModel.create(modifiedRequestData)
        res.status(201).send({status:true, msg:"successfully registered", data:newCollege})
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
        return
    }
}



// ### GET /functionup/collegeDetails
// - Returns the college details for the requested college (Expect a query parameter by the name `collegeName`. This is an abbreviated college name. For example `iith`)
// - Returns the list of all interns who have applied for internship at this college.
// - The response structure should look like [this](#college-details)


const collegeDetails = async function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try{
       /// Check if query param is given or not
       if(Object.keys(req.query).length==0){
        res.status(400).send({status:false,msg:"Pls give query param"})
        return
       }
  
  
       /// Check for valid query Params
        let reqParamArray = ["collegeName"]
        for(let key in req.query){
            if(!reqParamArray.includes(key)){
                res.status(400).send({status:false, msg:`query parameters can be only - ${reqParamArray.join(",")}`})
                return
            }
        }
  
  
        /// Check for value given in queryParam
        if(req.query["collegeName"].length==0){
            res.status(400).send({status:false, msg:"Invalid queryParam value"})
            return
        }

  
        /// Check if given collegeName is valid or not
        const collegeNameFromQuery = req.query.collegeName
        let college = await collegeModel.findOne({name:collegeNameFromQuery}).select({_id:0, name:1, fullName:1, logoLink:1})
        if(!college){
            res.status(400).send({status:false, msg:"No college found"})
            return
        }
  
        //Geting collegeId
        let collegeIdObj = await collegeModel.findOne({name:collegeNameFromQuery}).select()
  
        const collegeId = collegeIdObj._id
  
        college=JSON.parse(JSON.stringify(college))         /// Making deep copy (you can't change 'college' obj data directly)
  
  
        //Getting details of interns which are in college collegeName
        let internDetails = await internModel.find({collegeId}).select({name:1,email:1,mobile:1})
  
        if(internDetails.length==0){
            let interns = "No intern"
            college.interns=interns
            res.status(200).send({status:true, data:college})
        }
  
        college.interns=internDetails
  
        res.status(200).send({ data:college})
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
    }
  }

module.exports={registerCollege,collegeDetails}