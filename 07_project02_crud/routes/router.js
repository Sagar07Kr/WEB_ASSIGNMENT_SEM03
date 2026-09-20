const express=require("express");

const router=express.Router();

const MemberController=require("../controllers/membercontroler.js");


router.get("/",MemberController.home);
router.get("/addmember",MemberController.Add)
router.post("/createmember",MemberController.create)
router.get("/searchmember",MemberController.search);
router.post("/searchedmember",MemberController.searched)
router.get("/viewmember",MemberController.view);
router.get("/edit/:id",MemberController.edit);
router.get("/delete/:id",MemberController.delete);
router.post("/update/:id",MemberController.update)


module.exports=router;