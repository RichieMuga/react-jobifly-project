import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
    return (
        <Wrapper>
            <nav>
                <Link to='Add-jobs'>add jobs</Link>
                <Link to='All-Jobs'>all jobs</Link>
            </nav>
            <Outlet />
        </Wrapper>
    )
}

export default SharedLayout