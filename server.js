import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js'


//middleware and authentication
import notFoundMiddleware from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandlermiddleware.js'

//routers
import authHandler from "./routers/authHandlerRouter.js";
import jobsHandler from "./routers/jobsRouter.js"

app.use(express.json())

// router use
app.use('/api/v1/auth', authHandler)
app.use("/api/v1/jobs", jobsHandler)


app.use(notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 5000

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// })


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()