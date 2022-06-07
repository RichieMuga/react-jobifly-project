import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
//handles throws and await
import "express-async-errors"
import morgan from "morgan"
import connectDB from './db/connect.js'


//middleware and authentication
import notFoundMiddleware from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandlermiddleware.js'
import auth from './middleware/auth.js'

//routers
import authHandler from "./routers/authHandlerRouter.js";
import jobsHandler from "./routers/jobsRouter.js"


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('tiny'))
}

app.use(express.json())

//rough work
app.get('/', (req, res) => {
    res.send('welcome')
})

// router use
app.use("/api/v1/auth", authHandler)
app.use("/api/v1/jobs", auth, jobsHandler)


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