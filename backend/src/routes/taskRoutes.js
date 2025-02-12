const { Router } = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { validateTask } = require("../middlewares/validators");

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", validateTask, createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;
