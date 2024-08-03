import express from 'express'
const app = express()
const PORT = 3030

app.get('/', (req, res) => {
    res.json({ msg: "app" })
})

app.listen(PORT, () => console.log(`app listen on port ${process.env.PORT}`))