
const express=require("express");
const mongoose=require("mongoose");
const app=express();

const router=require("./routes/router.js");

app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.set("view engine","ejs");

const connectDB=require("./config/db.js")
connectDB();

const port=3000;
app.use("/",router);

app.listen(port,()=>{
    console.log("server is ringing at port no 3000");
})