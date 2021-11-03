import React, { useState, useEffect } from 'react'
import { CharacterList } from './CharacterList'
import Editor from './Editor'
import CharacterForm from './NewCharacterForm'

export const Characters = () => {
    const [ characters , setCharacters ] = useState([])
    const [toggled, setToggled] = useState(true);

    useEffect(() => {
    fetch('/characters').then(resp => resp.json()
    ).then(data => {
        const character = []
        for (const key in data) {
            character.push({
                id: data[key].id,
                name: data[key].name,
                ship: data[key].ship,
                skill_level: data[key].skill_level,
                description: data[key].description,
                img_url: data[key].img_url
            })
        }
        setCharacters(character)
    })
    }, [setCharacters])



    const addCharacterHandler = character => {
        fetch("/characters", {
            method: 'POST',
            body: JSON.stringify(character),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            setCharacters( prevCharacters => [...prevCharacters,{ id: data.id , ...character}])
            console.log(character)
        });
        
    }

    const removeItem = event => {
        fetch(`/characters/${event.target.id}`, {
            method: 'DELETE'
        }).then(resp => resp.json()
        ).then(data => data)

        
    }
    const editCharacterHandler = character => {
        !toggled ? setToggled(true) : setToggled(false);
        fetch("/characters", {
            method: 'PATCH',
            body: JSON.stringify(character),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            setCharacters( prevCharacters => [...prevCharacters,{ id: data.id , ...character}])
            console.log(character)
        });
        
    }

    return(
        <div className="p-5">
            <CharacterForm onAddCharacter={addCharacterHandler}/>
            <Editor onAddCharacter={addCharacterHandler}/>

            <section className="container">
                <h2 className="text-center">Characters</h2>
                <CharacterList characters={characters} removeItem={removeItem} editCharacter={editCharacterHandler}/>
            </section>
        </div>
    )
}