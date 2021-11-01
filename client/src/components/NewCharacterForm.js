import React, { useState } from "react";

function CharacterForm({ user, setUser }) {
  const [name, setName] = useState("");
  const [ship, setShip] = useState("");
  const [skill, setSkill] = useState("");
  const [position, setPosition] = useState("");
  const [gold, setGold] = useState("");
  const [user_id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/character", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then((response) => response.json());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
        <label htmlFor="ship">Ship</label>
          <input
            type="text"
            name="ship"
            value={ship}
            onChange={(e) => {
              setShip(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
        <label htmlFor="skill">Skill</label>
          <input
            type="text"
            name="skill"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
        <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
        <label htmlFor="gold">Gold</label>
          <input
            type="text"
            name="gold"
            value={gold}
            onChange={(e) => {
              setGold(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <input
            type="hidden"
            name="user_id"
            value={user_id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <button className="" type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default CharacterForm