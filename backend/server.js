import express from 'express'
import auth from './routes/auth.js'

const app = express()
const PORT = 3030

app.use(express.json())

app.use('/auth', auth)

app.get('/', (req, res) => {
    res.send('<h1>home page</h1>')
})

app.listen(PORT, () => console.log(`app listening on port: http://127.0.0.1:${PORT}`))