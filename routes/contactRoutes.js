const express=require("express");
const router=express.Router();
const {getContacts,getCreate,getContact,getUpdate,getDelete} =require("../controllers/contactController")

router.route("/").get(getContacts)

router.route("/").post(getCreate)

router.route("/").get(getContact)

router.route("/:id").put(getUpdate)

router.route("/:id").delete(getDelete)



module.exports=router;