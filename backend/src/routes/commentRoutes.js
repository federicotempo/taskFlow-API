const { Router } = require("express");
const {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const { validateId } = require("../middlewares/validateId");
const { validateComment } = require("../middlewares/validateComment");

const commentRouter = Router();

commentRouter.get("/", getComments);
commentRouter.get("/:id", validateId, getCommentById);

commentRouter.post("/", validateComment, createComment);

commentRouter.put("/:id", validateId, validateComment, updateComment);

commentRouter.delete("/:id", validateId, deleteComment);

module.exports = commentRouter;
