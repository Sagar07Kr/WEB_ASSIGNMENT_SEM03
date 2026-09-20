const mongoose=require("mongoose");

const MemberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    batch:{
        type:String,
        required:true,
    },

    post:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    phoneno:{
        type:Number,
        required:true,
    }
})

const MemberModel=mongoose.model("clubmembers",MemberSchema);

module.exports=MemberModel;