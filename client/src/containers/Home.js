import React from 'react'
import { NavLink } from 'react-router-dom'
import crow from './crowsnestlogo.png'

export const Home = () => {
    return(
        <div className="position-absolute top-50 start-50 translate-middle">

            <img src={crow} className="rounded-pill w-50" alt="logo"/>
            <h1>The Crows Nest</h1>


            <p>Create Character Sheets</p>
            <NavLink className="btn btn-outline-info" to='/login'>Login</NavLink>

        </div>
    )
}
export default Home 