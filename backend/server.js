import dotenv from "dotenv"
import express from 'express'
import mongoose from "mongoose"
import cors from "cors"

import { postRoutes } from "./routes/posts.js"

dotenv.config()

//express app
const app = express()


//middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({ msg: "app" })
})

app.get('/test', (req, res) => {
    res.json({ msg: 'app/test' })
})


//routes
app.use("/api/posts", postRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`connected to db & listening on port ${process.env.PORT}`))
    })
    .catch((error) => {
        console.log(error)
    })
