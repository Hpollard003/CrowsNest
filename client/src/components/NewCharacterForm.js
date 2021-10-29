import React, { useState } from "react";

const initialValues = {
    name: "",
    ship: "",
    skill: "",
    position: "",
    gold: "",
    user_id: ""
};

function CharacterForm({ user, setUser}) {

    const [ values , setValues ] = useState(initialValues)

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name , value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

        fetch("/character", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: value.name,
                ship: value.ship,
                skill: value.skill,
                position: value.position,
                gold: value.gold,
                user_id: value.user_id
            })
        })
        .then(response => response.json())
    }
}