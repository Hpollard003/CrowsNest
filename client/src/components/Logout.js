import React from "react";
import { NavLink } from "react-router-dom";

function Logout({ user, setUser }) {
    const handleLogout = () => {
        fetch("/logout", {method: "DELETE"})
        .then(resp => {
            if (resp.ok) {
                setUser = null
            }
        })
    };

    return (
        <div>
            <button onClick={handleLogout} ><NavLink to="/">Logout</NavLink></button>
        </div>
    )

}

export default Logout 