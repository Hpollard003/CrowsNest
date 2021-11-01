import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
    return(
        <div className="">
            <h1>The Crows Nest</h1>

            <NavLink to='/login'>Login</NavLink>

            <p>Create Dnd Pirate Edition Character Sheets</p>

        </div>
    )
}
export default Home