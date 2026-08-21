const mongoose=require("mongoose");

const FacultySchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        require:true,
    },

    experience:{
        type:String,
        required:true,
    }
})

const FacultyModel=mongoose.model("facultysystems",FacultySchema);

module.exports=FacultyModel;