import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js'


//middleware
import notFoundMiddleware from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandlermiddleware.js'


app.get('/', (req, res) => {
    res.send('siiiiiiii')
})

app.use(notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()