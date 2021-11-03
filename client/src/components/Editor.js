import React, { useEffect, useState } from "react";

export const Editor = (props) => {
  const [character, setCharacter] = useState([]);
  const [charId, setCharId] = useState([]);
  const [name, setName] = useState("");
  const [ship, setShip] = useState("");
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
    fetch("/characters", {
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
    fetch(`/characters/${charId}`)
      .then((resp) => resp.json())
      .then((data) => {
        const character = [];
        for (const key in data) {
          character.push({
            id: data[key].id,
            name: data[key].name,
            ship: data[key].ship,
            skill_level: data[key].skill_level,
            description: data[key].description,
            img_url: data[key].img_url,
          });
        }
        setCharacter(character);
      });
  }, [charId]);

  const editBtn = (e) => {
    setCharId(e.target.id);
    e.preventDefault();
    addCharacterHandler({
      name: name,
      ship: ship,
      skill_level: skill,
      description: description,
      img_url: image,
      user_id: user.id,
    });
  };
  const toggleBtn = (e) => {
    setCharId(e.target.id);
    !toggled ? setToggled(true) : setToggled(false);
  };

  return (
    <div className="position-bottom d-inline-flex card w-50">
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
            name="ship"
            id="ship"
            placeholder="Ship"
            value={ship}
            onChange={(e) => {
              setShip(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 list-group-item">
          <input
            type="text"
            className="form-control"
            name="skill"
            id="skill"
            placeholder="Skill"
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
