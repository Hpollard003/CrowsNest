import React from "react";

export const CharacterList = (props) => {
  const renderCharacterList = () => {
    return (
      <div className="row">
        {props.characters.map((c, ind) => (
          <div className="col">
            <div className="card w-100 " key={ind}>
              <img
                src={`${c.img_url}`}
                className="card-img-top border border-5"
                alt={`${c.name} img`}
              />
              <div className="card-body">
                <h5 className="fs-3 card-title text-decoration-underline">{c.name}</h5>
                <p className="card-text">
                  <label className="fw-bold">Description</label> <br></br>
                  {c.description}
                </p>
              </div>
              <ul className="list-group list-group-flush"  key={Math.random()}>
                <li className="list-group-item" key={Math.random()}>
                  <label className="fw-bold">Ship</label> <br></br> {c.ship}
                </li>
                <li className="list-group-item" key={Math.random()}>
                  <label className="fw-bold">Skill</label> <br></br> {c.skill}
                </li>
                <li className="list-group-item" key={Math.random()}>
                  <label className="fw-bold">Gold</label> <br></br> {c.gold}
                </li>
              </ul>
              <div className="card-body">
                <button
                  id={c.id}
                  className="btn btn-danger"
                  onClick={props.removeItem}
                >
                  Remove
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
    </section>
  );
};
export default CharacterList;
