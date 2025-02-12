const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    
    return res.status(500).json({
      message: "There was an error retrieving the tasks",
      error: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, status, visibility } = req.body;
    const task = await prisma.task.create({
      data: { title, description, dueDate, status, visibility },
    });
    return res.status(201).json({ message: "Task created" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "There was an error creating the task",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, status, visibility } = req.body;
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, description, dueDate, status, visibility },
    });
    return res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error.message);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(500).json({
      message: "There was an error updating the task",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error.message);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(500).json({
      message: "There was an error deleting the task",
      error: error.message,
    });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
