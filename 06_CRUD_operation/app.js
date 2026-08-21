const mongoose=require("mongoose");
const express=require("express");

const connectDB=require("./config/db.js");
connectDB();

const app=express();

const router=require("./routes/router.js");

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/",router);
const port=3000;
app.listen(port,()=>{
    console.log("server is runging at port no 3000");  
})