import React, { useState, useEffect } from 'react'
import { CharacterList } from './CharacterList'
import CharacterForm from './NewCharacterForm'

export const Characters = () => {
    const [ characters , setCharacters ] = useState([])

    useEffect(() => {
    fetch('/characters').then(resp => resp.json()
    ).then(data => {
        const characters = []
        for (const key in data) {
            characters.push({
                id: key,
                name: data[key].name,
                ship: data[key].ship,
                skill: data[key].skill,
                position: data[key].position,
                gold: data[key].gold
            })
        }
        setCharacters(characters)
    })
    }, [])



    const addCharacterHandler = character => {
        fetch("/characters", {
            method: 'POST',
            body: JSON.stringify(character),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            setCharacters( prevCharacters => [...prevCharacters,{ key: data.id , ...character}])
            console.log(character)
        });
        
    }

    const removeItem = id => {
        setCharacters( prevCharacterIDs => prevCharacterIDs.filter((character) => character.id !== id ))

        
    }

    return(
        <div>
            <CharacterForm onAddCharacter={addCharacterHandler}/>

            <section>
                <h2>All Existing Characters</h2>
                <CharacterList characters={characters} removeItem={removeItem}/>
            </section>
        </div>
    )
}