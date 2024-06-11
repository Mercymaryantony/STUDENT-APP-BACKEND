const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const {studentmodel} = require("./models/student")
app.use(cors())
app.use(express.json())


app.get("/view",(req,res)=>{
    res.send("VIEW")
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})

app.listen(8080,()=>{
    console.log("server started")
})

app.post("/add",(req,res)=>{
    let input = req.body
    let student =new studentmodel(input)
    console.log(student)
    student.save()
    res.send("ADD")
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})