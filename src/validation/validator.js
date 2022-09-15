const collegeModel = require("../models/collegeModel")
const CollegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/
const mobileRegex = /^[6-9]\d{9}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const isValidRequestBody = function(data){
    return Object.keys(data).length!=0
}

const isValidString = function(data){
    if(Object.prototype.toString.call(data)!="[object String]" || data.trim().length==0){
        return false
    }
    return true
}

const isValidMobileNumber = function(data){
    if(Object.prototype.toString.call(data)!="[object Number]" || !mobileRegex.test(data)){
        return false
    }
    return true
}

const isValidEmail = function(data){
    if(Object.prototype.toString.call(data)!="[object String]" || !emailRegex.test(data)){
        return false
    }
    return true
}

const isValidUrl = function(data){
    if(Object.prototype.toString.call(data)!="[object String]" || !urlRegex.test(data)){
        return false
    }
    return true
}


const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    return true;
  };



module.exports={
    isValidEmail,
    isValidMobileNumber,
    isValidRequestBody,
    isValidString,
    isValidUrl,
    isValid
}