import React from "react";
import { NavLink } from "react-router-dom";

function Logout() {
    const handleLogout = () => {
        fetch("/logout", {method: "DELETE"})
        .then(() => {})
    };

    return (
        <div>
            <button className="btn btn-outline-info rounded-pill" onClick={handleLogout} ><NavLink className="text-decoration-none text-dark" to="/">Logout</NavLink></button>
        </div>
    )

}

export default Logout 