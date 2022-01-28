import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    isMember: true,
    name: '',
    email: '',
    password: ''
}

const Register = () => {
    const [values, setvalues] = useState(initialState);
    //global values 

    const handleChange = (e) => {
        console.log(e.target);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={handleSubmit}>
                <Logo />
                <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
                <FormRow type='text' name='email' value={values.email} handleChange={handleChange} />
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
                <button type='submit' className='btn btn-block'>submit</button>
            </form>

        </Wrapper>);
};

export default Register;
