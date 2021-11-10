import React, { useState } from "react";

const CharacterForm = (props) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [toggled, setToggled] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddCharacter({
      name: name,
      skill: skill,
      description: description,
      img_url: image
    });
  };

  const toggleBtn = () => {
    !toggled ? setToggled(true) : setToggled(false);
  }

  return (
    <div>
    <i className="fas fa-chevron-down fs-3 charForm fixed-bottom p-5 text-info"></i>
    <i className="fas fa-chevron-down fs-1 charForm fixed-bottom p-5"></i>
    <div className="charForm fixed-bottom card w-50 bg-dark" >
      <button className="btn btn-outline-info" onClick={toggleBtn}>New Character</button>
      <form onSubmit={handleSubmit} className="list-group list-group-flush" hidden={toggled}>
        <div className="mb-3 list-group-item  bg-transparent">
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
              setImage(e.target.value)
            }}
          />
        </div>

        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};
export default CharacterForm;
