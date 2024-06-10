const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.post("/contact",(req,res)=>{
    res.send("WELCOME TO MY CONTACT PAGE")
})

app.listen(8080,()=>{
    console.log("server started")
})