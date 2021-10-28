import React from "react";

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
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Logout