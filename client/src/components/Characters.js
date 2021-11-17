import React, { useState, useEffect } from "react";
import { CharacterCard } from "./CharacterCard";
import CharacterForm from "./NewCharacterForm";

export const Characters = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/characters")
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);



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
      })
  };

  const filterEvil = () => {
    const allGoodHere = characters.filter(goodGuys => !goodGuys.name.includes("Evil"))
    setCharacters(allGoodHere)
  }



  const removeItem = (event) => {
    fetch(`/characters/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        filter(event.target.id)
      });}

      const filter = (id) => {
        const newchars = characters.filter(char => char.id !== parseInt(id))
        setCharacters(newchars)
      }

  return (
    <div className="p-5 text-center">
      <div className="charForm">
        <CharacterForm onAddCharacter={addCharacterHandler} />
      </div>
      <section className="container">
        <h2 className="text-center">Characters</h2>
        <button onClick={filterEvil}>See no evil</button>
        <CharacterCard characters={characters} setCharacters={setCharacters} removeItem={removeItem} />
      </section>
    </div>
  );
};
