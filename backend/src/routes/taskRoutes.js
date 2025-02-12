const { Router } = require("express");
const { getTasks, createTask, updateTask } = require("../controllers/taskController");

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id");

module.exports = taskRouter;
