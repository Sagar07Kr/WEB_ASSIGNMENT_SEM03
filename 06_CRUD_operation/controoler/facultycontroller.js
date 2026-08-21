const mongoose=require("mongoose");
const express=require("express");

const FacultyModel=require("../models/Facultymodels.js")

const FacultyController={

    home:(req,res)=>{
        res.render("home.ejs");
    },

    Add:(req,res)=>{
       res.render("form.ejs"); 
    },
    create:async (req,res)=>{
        const data= await FacultyModel.create(req.body);
        res.redirect("/");
    },
    ViewData:async (req,res)=>{
        const data=await FacultyModel.find();
        res.render("allFaculty.ejs",{data});
    },
    GetData:(req,res)=>{
       res.render("GetDataForm.ejs");
    },
    ViewSearchedData:async (req,res)=>{
        const data=await FacultyModel.find({name:req.body.name});
        res.render("GetSEARCHEDDATA.ejs",{data});
    },
    edit:async(req,res)=>{
        const data=await FacultyModel.findById(req.params.id);
        res.render("editform.ejs",{data});
    },
    delete:async (req,res)=>{
        const data=await FacultyModel.findByIdAndDelete(req.params.id);
        res.redirect("/");
    },
    update:async(req,res)=>{
        const data=await FacultyModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.redirect("/");
    }

}


module.exports=FacultyController;