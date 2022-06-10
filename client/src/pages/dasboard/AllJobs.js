import React from 'react'
import { SearchComponent, JobsContainer, Loading, SingleJobContainer } from '../../components';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from "../../assets/wrappers/JobsContainer";


const AllJobs = () => {
    const { jobs, totalJobs, page, numOfPages, getJobs, isLoading } = useAppContext()
    useEffect(() => {
        getJobs()
    }, [])
    if (isLoading) {
        <Loading />
    }
    if (jobs.length === 0) {
        return (<Wrapper>
            <h2>No jobs to display...</h2>
        </Wrapper>)
    }
    return (
        <Wrapper>
            <h5>{totalJobs} Job{totalJobs > 1 ? "s" : ""} found</h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    return <SingleJobContainer key={job._id} {...job} />
                })}
            </div>
        </Wrapper>
    )
}

export default AllJobs