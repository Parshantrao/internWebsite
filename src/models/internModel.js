const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId



// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique, '10 digit indian mobile number is a valid mobile number'}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}


const internSchema = mongoose.Schema(
    {
    name:{type:String, require:true, trim:true, lowercase:true},

    email:{type:String, require:true, unique:true, trim:true, lowercase:true},

    mobile:{type:String, require:true, unique:true},

    collegeId:{type:ObjectId, ref:"CollegeModel", require:true},
    
    isDeleted:{type:Boolean, default:false}

},{timestamps:true})

module.exports = mongoose.model("InternModel",internSchema)