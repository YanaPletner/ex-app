import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: 'User',
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("post", postSchema)
