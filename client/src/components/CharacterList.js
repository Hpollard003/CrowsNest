import React, { useState } from "react";

export const CharacterList = props => {
    return(
        <section>
            <ul>
                {props.characters.map(c => (
                    <li key={c.id}>
                        <span>{c.name}</span>
                        <span>{c.ship}</span>
                        <span>{c.skill}</span>
                        <span>{c.position}</span>
                        <span>{c.gold}</span>
                        <button onClick={props.removeItem.bind(this, c.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}