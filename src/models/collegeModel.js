const mongoose = require("mongoose")

// { name: { mandatory, unique, lowercase, trim, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }

const collegeSchema = mongoose.Schema(
    {
    name:{type:String, unique:true, require:true, trim:true, lowercase:true},

    fullName:{type:String, require:true, trim:true},

    logoLink:{type:String, require:true},

    isDeleted:{type:Boolean, default:false}

},{timestamps:true})

module.exports = mongoose.model("CollegeModel", collegeSchema)