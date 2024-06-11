const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":{type:String,required:true},
    "adm":{type:String,required:true},
    "rollno":{type:String,required:true},
    "pn":{type:String,required:true},
    "college":{type:String,required:true},
    "dob":{type:String,required:true},
    "em":{type:String,required:true},
    "pass":{type:String,required:true},
    "cp":{type:String,required:true},
    "url":String 
})

let studentmodel = mongoose.model("student",schema);
module.exports={studentmodel}