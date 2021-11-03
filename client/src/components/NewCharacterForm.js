import React, { useState, useEffect } from "react";

const CharacterForm = (props) => {
  const [name, setName] = useState("");
  const [ship, setShip] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [gold, setGold] = useState("");
  const [image, setImage] = useState("");
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
      skill: skill,
      description: description,
      gold: gold,
      img_url: image,
      user_id: user.id,
    });
  };

  return (
    <div className="sticky-bottom card w-50 " >
      <form onSubmit={handleSubmit} className="list-group list-group-flush">
        <div className="mb-3 list-group-item ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
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
          <label htmlFor="Ship" className="form-label">
            Ship
          </label>
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
          <label htmlFor="skill" className="form-label">
            Skill
          </label>
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
          <label htmlFor="gold" className="form-label">
            Gold
          </label>
          <input
            type="text"
            className="form-control"
            name="gold"
            id="gold"
            placeholder="Gold"
            value={gold}
            onChange={(e) => {
              setGold(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 list-group-item">
          <label htmlFor="description" className="form-label">
            Description
          </label>
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
          <label htmlFor="img_url" className="form-label">
            Image URL
          </label>
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
export default CharacterForm;
