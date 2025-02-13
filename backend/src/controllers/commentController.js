const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "There was an error retrieving the comments",
      error: error.message,
    });
  }
};

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "There was an error retrieving the comment",
      error: error.message,
    });
  }
};

const createComment = async (req, res) => {
  try {
    const { text, userId, taskId } = req.body;
    const comment = await prisma.comment.create({
      data: {
        text,
        userId,
        taskId,
      },
    });
    return res.status(201).json({ message: "Comment created successfully" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "There was an error creating the comment",
      error: error.message,
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, userId, taskId } = req.body;
    const comment = await prisma.comment.update({
      where: { id: Number(id) },
      data: { text, userId, taskId },
    });
    return res.status(200).json({ message: "Comment updated successfully" });
  } catch (error) {
    console.error(error.message);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(500).json({
      message: "There was an error updating the comment",
      error: error.message,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.delete({
      where: { id: Number(id) },
    });
    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error.message);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(500).json({
      message: "There was an error deleting the comment",
      error: error.message,
    });
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
