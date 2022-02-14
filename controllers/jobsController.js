const showStats = (req, res) => {
    res.send('show stats')
}
const getAllJobs = (req, res) => {
    res.send('get all jobs')
}
const createJob = (req, res) => {
    res.send('create job')
}
const updateJob = (req, res) => {
    res.send('UPDATE job')
}
const deleteJob = (req, res) => {
    res.send('delete job')
}

export { createJob, updateJob, getAllJobs, showStats, deleteJob }