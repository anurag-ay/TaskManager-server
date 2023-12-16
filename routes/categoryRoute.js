import express from "express";
const router = express.Router();
import {
  addCategoryController,
  deleteCategoryController,
  getCategoriesByUserId,
  updateCategoryController,
} from "../controller/categoryController.js";

router.post("/", addCategoryController);

router.get("/:userId", getCategoriesByUserId);

router.delete("/", deleteCategoryController);

router.put("/", updateCategoryController);

export default router;
