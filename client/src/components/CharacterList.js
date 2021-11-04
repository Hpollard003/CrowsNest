import React, { useState } from "react";
import Editor from "./Editor";

export const CharacterList = (props) => {
    const [charId, setCharId] = useState([]);

  const renderCharacterList = () => {
    return (
      <div className="row ">
        {props.characters.map((c, ind) => (
          <div className="col-4 p-2">
            <div className="card w-100 border-0 bg-transparent " key={ind}>
              <img
                src={`${c.img_url}` ? `${c.img_url}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoozNluLPGOP6A6GSiY06K9ASv2JYVzzgLgLN_JijNAbQVaADKMzqzCwLY2gX4FhSBkH4&usqp=CAU"}
                className="card-img-top border-info border-5 border-top border-bottom rounded-circle "
                style={{ width: "100%", height: "300px" }}
                alt={`${c.name} img`}
              />
              <div className="card-body ">
                <h5 className="fs-3 card-title rounded p-1 border-start border-bottom border-info p-2 border-4">
                  {c.name}
                </h5>
                <p className="card-text">
                  <label className="fw-bold rounded p-1 m-2 border-end border-bottom border-info border-2">
                    Description
                  </label>{" "}
                  <br></br>
                  {c.description}
                </p>
              </div>
              <ul className="list-group-flush list-group" key={ind}>
                <li
                  className="list-group-item border-0 bg-transparent"
                  key={ind}
                >
                  <label className="fw-bold rounded p-1 m-2 border-end border-bottom border-info border-2">
                    Ship
                  </label>{" "}
                  <br></br> {c.ship}
                </li>
                <li className="list-group-item bg-transparent" key={ind}>
                  <label className="fw-bold rounded p-1 m-2 border-end border-bottom border-info border-2">
                    Skill
                  </label>{" "}
                  <br></br> {c.skill_level}
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="/creator"
                  id={c.id}
                  className="btn btn-outline-danger border-top-0 border-end-0"
                  onClick={props.removeItem}
                >
                  Remove
                </a>
                <button
                  href="/creator"
                  id={c.id}
                  className="btn btn-outline-primary border-top-0 border-end-0"
                  onClick={e => {
                    setCharId(e.target.id)
                    console.log(charId)
                    }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <ul>{renderCharacterList()}</ul>
      <Editor charId={charId}/>
    </section>
  );
};
export default CharacterList;
