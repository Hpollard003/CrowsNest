import React, { useState } from "react";


export const Editor = ({setCharacters, characters,  charId , toggle, setToggled}) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");


  const editCharacterHandler = (character) => {
    fetch(`/characters/${charId}`, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const copy = [...characters]
        const index = copy.findIndex(char => char.id == charId)
        // console.log(index)
        copy[index] = data
        setCharacters(copy)
      });
  }

  const editBtn = (e) => {
    e.preventDefault();
    editCharacterHandler({
      name: name,
      skill: skill,
      description: description,
      img_url: image
    })
  };

  const toggled = (e) => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <div>
    <i className="fas fa-chevron-down fs-3 editForm fixed-bottom p-5 text-info"></i>
    <i className="fas fa-chevron-down fs-1 editForm fixed-bottom p-5"></i>
    <div className="fixed-bottom card w-50 editForm bg-dark">
      <button className="btn btn-outline-info" onClick={toggled}>
        2x Click Edit button to edit
      </button>
      <form
        onSubmit={editBtn}
        className="list-group list-group-flush"
        hidden={!toggle}
      >
        <div className="mb-3 list-group-item bg-transparent">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 list-group-item bg-transparent">
          <input
            type="text"
            className="form-control"
            name="skill"
            id="skill"
            placeholder="Skills"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 list-group-item bg-transparent">
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 list-group-item bg-transparent">
          <input
            type="text"
            className="form-control"
            name="img_url"
            id="img_url"
            placeholder="Enter Image Url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        
        <button className="btn btn-info" type="submit" >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};
export default Editor;
