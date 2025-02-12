const { Router } = require("express");
const { getTasks, createTask } = require("../controllers/taskController");

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask);
taskRouter.put("/:id");
taskRouter.delete("/:id");

module.exports = taskRouter;
