import React, { useState, useEffect } from "react";
import { CharacterList } from "./CharacterList";
import Editor from "./Editor";
import CharacterForm from "./NewCharacterForm";

export const Characters = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/characters")
      .then((resp) => resp.json())
      .then((data) => {
        const character = [];
        for (const key in data) {
          character.push({
            id: data[key].id,
            name: data[key].name,
            skill: data[key].skill,
            description: data[key].description,
            img_url: data[key].img_url,
          });
        }
        setCharacters(character);
      });
  }, [setCharacters]);

  const addCharacterHandler = (character) => {
    fetch("/characters", {
      method: "POST",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          { id: data.id, ...character },
        ]);
        console.log(character);
      });
  };

  const removeItem = (event) => {
    fetch(`/characters/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        const removed = characters.filter(prevCharacters => prevCharacters.id !== data.id)
        console.log(removed)
        setCharacters(removed);
        // console.log(characters);
      });}

  return (
    <div className="p-5 text-center">
      <div className="charForm">
        <CharacterForm onAddCharacter={addCharacterHandler} />
      </div>
      <section className="container">
        <h2 className="text-center">Characters</h2>
        <CharacterList characters={characters} setCharacters={setCharacters} removeItem={removeItem} />
      </section>
    </div>
  );
};
