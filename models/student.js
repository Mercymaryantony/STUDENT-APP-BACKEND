const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":{type:String,required:true},
    "adm":String,
    "rollno":String,
    "pn":String,
    "college":String,
    "dob":String,
    "em":String,
    "pass":String,
    "cp":String,
    "urlnode ":String

})

let studentmodel = mongoose.model("student",schema);
module.exports={studentmodel}