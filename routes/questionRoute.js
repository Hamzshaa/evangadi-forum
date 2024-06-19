
const {getAllquestion,getsinglequesion,postQuestion,searchQuestions}=require("../controller/QuestionController")
const express =require("express");
const router=express.Router()




router.get("/", getAllquestion );
router.get("/:id", getsinglequesion);
router.post("/", postQuestion);
router.get("/search/:searchQuery", searchQuestions);

module.exports=router