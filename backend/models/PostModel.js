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
    // tags: [{
    //     type: String,
    // }],
    // likes: {
    //     type: Number,
    //     default: 0,
    // },
    // comments: [{
    //     user: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //     },
    //     comment: {
    //         type: String,
    //         required: true,
    //     },
    //     createdAt: {
    //         type: Date,
    //         default: Date.now,
    //     }
    // }],
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // }
}, { timestamps: true })

export default mongoose.model("post", postSchema)
