import React, { useState, useEffect } from 'react'
import { CharacterList } from './CharacterList'
import CharacterForm from './NewCharacterForm'

export const Characters = () => {
    const [ characters , setCharacters ] = useState([])

    useEffect(() => {
    fetch('/characters').then(resp => resp.json()
    ).then(data => {
        const character = []
        for (const key in data) {
            character.push({
                id: data[key].id,
                name: data[key].name,
                ship: data[key].ship,
                skill: data[key].skill,
                description: data[key].description,
                gold: data[key].gold,
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

    return(
        <div className="container">
            <CharacterForm onAddCharacter={addCharacterHandler}/>

            <section >
                <h2 className="text-center">Characters</h2>
                <CharacterList characters={characters} removeItem={removeItem}/>
            </section>
        </div>
    )
}