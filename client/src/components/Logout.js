import React from "react";

function Logout({ user, setUser }) {
    const handleLogout = () => {
        fetch("/logout")
    };
}