import React, { useState , useEffect } from "react";

const CharacterForm = (props) => {
  const [name, setName] = useState("");
  const [ship, setShip] = useState("");
  const [skill, setSkill] = useState("");
  const [position, setPosition] = useState("");
  const [gold, setGold] = useState("");
  const [user , setUser] = useState(null)

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
        position: position,
        gold: gold,
        user_id: user.id
    })
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
        <button className="" type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default CharacterForm