const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    return res.json(tasks);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        message: "There was an error retrieving the tasks",
        error: error.message,
      });
  }
};

module.exports = { getTasks };
