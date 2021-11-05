import React, { useEffect, useState } from "react";


export const Editor = (props) => {
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
        console.log(character);
      });
  };

  const editBtn = (e) => {
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
    <div>
    <i className="fas fa-chevron-down fs-3 editForm fixed-bottom p-5 text-info"></i>
    <i className="fas fa-chevron-down fs-1 editForm fixed-bottom p-5"></i>
    <div className="fixed-bottom card w-50 editForm bg-dark">
      <button className="btn btn-outline-info" onClick={toggleBtn}>
        2x Click Edit button to edit
      </button>
      <form
        onSubmit={editBtn}
        className="list-group list-group-flush"
        hidden={toggled}
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

        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};
export default Editor;
