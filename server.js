import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './database/db.js'


dotenv.config()
const PORT = process.env.PORT || 7000
const app = express()

connectDB()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    res.send("Success")
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})