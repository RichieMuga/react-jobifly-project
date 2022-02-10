const showStats = (req, res) => {
    res.send('show stats')
}
const getAllJobs = () => {
    res.send('get all jobs')
}
const createJob = (req, res) => {
    res.send('create job')
}
const updateJob = () => {
    res.send('get all jobs')
}
const deleteJob = () => {
    res.send('delete job')
}

export { createJob, updateJob, getAllJobs, showStats, deleteJob }