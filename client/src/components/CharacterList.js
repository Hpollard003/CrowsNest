import React from "react";

export const CharacterList = props => {

    
    const renderCharacterList = () => {
        // const editChar = e => {
        //     fetch(`/characters/${e.target.id}`, {
        //         method: 'PATCH',
        //         body: JSON.stringify()
        //     })
        // }
        return (
            <div>
            {props.characters.map((c, ind) => (
                <li key={ind}>
                    <span>Name {c.name} </span>
                    <span>Ship {c.ship} </span>
                    <span>Skill {c.skill} </span>
                    <span>Position {c.position} </span>
                    <span>Bounty {c.gold} </span>
                    <button id={c.id} onClick={props.removeItem}>Remove</button>
                </li>
            ))}
            </div>
        )
    }


    return(
        <section>
            <ul>
                {renderCharacterList()}
            </ul>
        </section>
    )
}
export default CharacterList;