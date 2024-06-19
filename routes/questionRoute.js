import {
  getAllQuestions,
  getSingleQuestion,
  postQuestion,
  searchQuestions,
  favoriteQuestions,
  getFavoriteQuestions,
} from "../controllers/questionController.js";
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllQuestions);
router.put("/favorite/:questionId", authMiddleware, favoriteQuestions);
router.get("/favorite", authMiddleware, getFavoriteQuestions);
router.get("/:id", getSingleQuestion);
router.post("/", postQuestion);
router.get("/search/:searchQuery", searchQuestions);

export default router;
