const express=require("express");

const router=express.Router();

const FacultyController=require("../controoler/facultycontroller.js")


router.get("/",FacultyController.home);
router.get("/addData",FacultyController.Add);
router.post("/createdata",FacultyController.create);
router.get("/viewData",FacultyController.ViewData);
router.get("/getData",FacultyController.GetData);
router.post("/viewSearchdata",FacultyController.ViewSearchedData);
router.get("/editdata/:id",FacultyController.edit);
router.get("/deleteData/:id",FacultyController.delete);
router.post("/updatedata/:id",FacultyController.update);
module.exports=router;