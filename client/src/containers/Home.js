import React from 'react'
import { NavLink } from 'react-router-dom'
import crow from './crowsnestlogo.png'

export const Home = () => {
    return(
        <div className="position-absolute top-50 start-50 translate-middle text-center">

            <h1>Welcome to</h1>
            <img src={crow} className="rounded-pill w-50 border border-dark border-2" alt="logo"/>
            <h1>The Crows Nest</h1>


            <p>Create Character Sheets</p>
            <NavLink className="btn btn-outline-info mx-2" to='/login'>Login</NavLink>
            <NavLink className="btn btn-outline-info mx-2" to='/signup'>Sign Up</NavLink>

        </div>
    )
}
export default Home 