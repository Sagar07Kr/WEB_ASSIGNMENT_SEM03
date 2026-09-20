const express=require("express");
const mongoose=require("mongoose");

const MemberModel=require("../models/membersModel.js");

const MemberController={
    home:(req,res)=>{
        res.render("home.ejs");
    },
    Add:(req,res)=>{
        res.render("Addform.ejs");
    },
    create:async (req,res)=>{
        const data=await MemberModel.create(req.body);
        res.redirect("/");
    },
    search:(req,res)=>{
        res.render("searchform.ejs");
    },
    searched:async (req,res)=>{
        const data=await MemberModel.find({name:req.body.name});
        res.render("searchedata.ejs",{data});
    },
    view:async (req,res)=>{
        const data=await MemberModel.find();
        res.render("allmember.ejs",{data});
    },
    edit:async (req,res)=>{
        const data=await MemberModel.findById(req.params.id);
        res.render("editform.ejs",{data});
    },
    update:async (req,res)=>{
        const data=await MemberModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.redirect("/");
    },
    delete:async (req,res)=>{
        const data=await MemberModel.findByIdAndDelete(req.params.id);
        res.redirect("/");
    }
}

module.exports=MemberController;