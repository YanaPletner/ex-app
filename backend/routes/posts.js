import express from "express"
import { getAllPosts, getPost, createPost, deletePost, updatePost } from "../controllers/postController.js"

export const postRoutes = express.Router()

//GET ALL POSTS 
postRoutes.get('/', getAllPosts)

//GET A SINGLE POST
postRoutes.get("/:id", getPost)

//POST A NEW POST
postRoutes.post("/", createPost)

//DELETE A NEW POST
postRoutes.delete("/:id", deletePost)

//UPDATE A POST
postRoutes.patch("/:id", updatePost)