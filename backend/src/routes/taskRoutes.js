const { Router } = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} = require("../controllers/taskController");
const { validateTask } = require("../middlewares/validateTask");
const { validateId } = require("../middlewares/validateId");

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.get("/:id", getTaskById);

taskRouter.post("/", validateTask, createTask);

taskRouter.put("/:id", validateId, validateTask, updateTask);

taskRouter.delete("/:id", validateId, deleteTask);

module.exports = taskRouter;
