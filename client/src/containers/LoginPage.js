import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../components/Login';

export const LoginPage = () => {
    return (
        <div>
        <Login/>
        <NavLink to='/Signup' >Signup Here</NavLink>
        </div> 
    )
}