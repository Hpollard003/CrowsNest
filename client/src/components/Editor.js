import React, { useEffect, useState } from "react";


export const Editor = (props) => {
  const [character, setCharacter] = useState([]);
//   const [charId, setCharId] = useState([]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [toggled, setToggled] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          console.log(user);
        });
      }
    });
  }, []);

  const addCharacterHandler = (character) => {
    fetch(`/characters/${props.charId}`, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacter((prevCharacters) => [
          ...prevCharacters,
          { id: data.id, ...character },
        ]);
        console.log(character);
      });
  };

  useEffect(() => {
    fetch(`/characters`)
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
        setCharacter(character);
      });
  }, []);

  const editBtn = (e) => {
    // setCharId(e.target.id);
    e.preventDefault();
    addCharacterHandler({
      name: name,
      skill: skill,
      description: description,
      img_url: image,
      user_id: user.id,
    });
  };
  const toggleBtn = (e) => {
    !toggled ? setToggled(true) : setToggled(false);
  };

  return (
    <div className="fixed-bottom card w-50 editForm">
      <button className="btn btn-outline-info" onClick={toggleBtn}>
        Edit
      </button>
      <form
        onSubmit={editBtn}
        className="list-group list-group-flush"
        hidden={toggled}
      >
        <div className="mb-3 list-group-item ">
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
        <div className="mb-3 list-group-item">
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
        <div className="mb-3 list-group-item">
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
        <div className="mb-3 list-group-item">
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

        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Editor;
