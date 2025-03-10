import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/taskController";

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);

export default router;