import React, { useState, useEffect } from "react";

const CharacterForm = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddCharacter({
      name: name,
      ship: ship,
      skill_level: skill,
      description: description,
      img_url: image,
      user_id: user.id,
    });
  };

  const toggleBtn = () => {
    !toggled ? setToggled(true) : setToggled(false);
  }

  return (
    <div className="charForm fixed-bottom card w-50" >
      <button className="btn btn-outline-info" onClick={toggleBtn}>New Character</button>
      <form onSubmit={handleSubmit} className="list-group list-group-flush" hidden={toggled}>
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
              setImage(e.target.value)
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
export default CharacterForm;
