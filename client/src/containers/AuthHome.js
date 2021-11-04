import React from 'react'
import crow from './crowsnestlogo.png'

export const AuthHome = () => {
    return(
        <div className="shadow-sm rounded-circle p-5 position-absolute top-50 start-50 translate-middle text-center">
            
            <img src={crow} className="shadow-lg rounded-pill w-50 border border-dark border-2" alt="logo"/>
            <h1 className=" border border-info rounded-pill border-top-0 border-bottom-0 border-5">The Crows Nest</h1>


            <p >Create Character Sheets</p>

        </div>
    )
}
export default AuthHome 