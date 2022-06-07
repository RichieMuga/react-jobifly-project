import Job from "../models/jobs.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createJob = async (req, res) => {
    const { company, position } = req.body
    //check if company and position are present
    if (!company || !position) {
        throw BadRequestError('please enter all the fields')
    }
    //created by,we'll  import userId from auth notFoundMiddleware
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)

    res.status(StatusCodes.CREATED).json({ job })
}


const showStats = (req, res) => {
    res.send('show stats')
}
const getAllJobs = (req, res) => {
    res.send('get all jobs')
}
// const createJob = (req, res) => {
//     const { company, position } = req.body
//     //check if company and position are present
//     if (!company || !position) {
//         throw BadRequestError('please enter all the fields')
//     }
//     //created by,we'll  import userId from auth notFoundMiddleware
//     req.body.createdBy = req.user.userId
//     const job = await Job.create(req.body)
//     // const userAlreadyHasAccount = await User.findOne({ email })

//     res.status(StatusCodes.CREATED).json({ job })
// }
const updateJob = (req, res) => {
    res.send('UPDATE job')
}
const deleteJob = (req, res) => {
    res.send('delete job')
}

export { createJob, updateJob, getAllJobs, showStats, deleteJob }