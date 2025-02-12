const { Router } = require("express");
const { getTasks } = require("../controllers/taskController");

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/");
taskRouter.put("/:id");
taskRouter.delete("/:id");

module.exports = taskRouter;
