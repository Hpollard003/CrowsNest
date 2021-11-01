import React, { useState } from 'react'
import { CharacterList } from './CharacterList'
import CharacterForm from './NewCharacterForm'

export const Characters = () => {
    const [ characters , setCharacters ] = useState([])

    const addCharacterHandler = character => {
        setCharacters( prevCharacters => [...prevCharacters, character])
    }

    const removeItem = characterID => {
        setCharacters( prevCharacterIDs => prevCharacterIDs.filter((character) => character.id !== characterID ))
    }

    return(
        <div>
            <CharacterForm onAddCharacter={addCharacterHandler}/>

            <section>
                <CharacterList characters={characters} removeItem={removeItem}/>
            </section>
        </div>
    )
}