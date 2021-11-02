import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUp from '../components/SignUp';

export const SignupPage = () => {
    return (
        <div>
        <SignUp/>
        <NavLink to='/login' >Already a user login here.</NavLink>
        </div>
    ) 
}