import express from "express";
import {
  addTaskController,
  deleteTaskController,
  getAllTaskController,
  getTaskByIdController,
  updateTaskController,
} from "../controller/taskController.js";
const router = express.Router();

router.post("/", addTaskController);
router.delete("/", deleteTaskController);
router.put("/", updateTaskController);
router.get("/", getAllTaskController);
router.get("/:taskId", getTaskByIdController);

export default router;
