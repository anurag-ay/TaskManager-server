import express from "express";
const router = express.Router();
import {
  addCategoryController,
  deleteCategoryController,
  getCategoriesByUserIdController,
  updateCategoryController,
} from "../controller/categoryController.js";

router.post("/", addCategoryController);
router.get("/:userId", getCategoriesByUserIdController);
router.delete("/", deleteCategoryController);
router.put("/", updateCategoryController);

export default router;
