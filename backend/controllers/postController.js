import Post from "../models/PostModel.js"
import mongoose from "mongoose"

//get all posts
export async function getAllPosts(req, res) {
    const posts = await Post.find().sort({ createdAt: -1 })
    console.log(posts)
    res.status(200).json(posts)
}

//get a single post
export async function getPost(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such post" })
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: "No such post" })
    }

    res.status(200).json(post)
}

//create a new post
export async function createPost(req, res) {
    const { title, content, author } = req.body
    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!content) {
        emptyFields.push('content')
    }
    if (!author) {
        emptyFields.push('author')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill all the fields', emptyFields })
    }

    try {
        const post = await Post.create({ title, content, author })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a single post
export async function deletePost(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such post" })
    }

    const post = await Post.findOneAndDelete({ _id: id })

    if (!post) {
        res.sttaus(400).json({ error: "No such post" })
    }

    res.status(200).json(post)
}

//update a post
export async function updatePost(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such post" })
    }

    const post = await Post.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!post) {
        res.sttaus(400).json({ error: "No such post" })
    }

    res.status(200).json(post)
}