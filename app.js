const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const {studentmodel} = require("./models/student")
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")

app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.send(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
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
    res.send({"status":"ADD"})
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})