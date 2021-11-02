import React from "react";

export const CharacterList = props => {
    return(
        <section>
            <ul>
                {props.characters.map((c, ind) => (
                    <li key={Math.random()}>
                        <span>{c.name}</span>
                        <span>{c.ship}</span>
                        <span>{c.skill}</span>
                        <span>{c.position}</span>
                        <span>{c.gold}</span>
                        <button id={c.id} onClick={props.removeItem}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default CharacterList;