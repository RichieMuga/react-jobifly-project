import React from 'react';
import { useEffect } from 'react'

const Dashboard = () => {
    const fetchdata = async () => {
        try {
            const response = await fetch('http://localhost:5000/')
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchdata()
    }, [])
    return <div>Dashboard</div>;
};

export default Dashboard;
