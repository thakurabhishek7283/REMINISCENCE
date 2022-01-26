import express from "express";
import auth from "../middleware/auth";
import {
  getPost,
  getPosts,
  getPostsByCreator,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/creator", getPostsByCreator);
router.get("/search", getPostsBySearch);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", commentPost);

export default router;
