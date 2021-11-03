import React from 'react';

export const CharacterList = (props) => {
  const renderCharacterList = () => {

    return (
      <div className="row ">
        {props.characters.map((c, ind) => (
          <div className="col" >
            <div className="card w-100 border " key={ind}>
              <img
                src={`${c.img_url}`}
                className="card-img-top"
                alt={`${c.name} img`}
              />
              <div className="card-body">
                <h5 className="fs-3 card-title rounded p-1 border-start border-bottom border-dark border-4">{c.name}</h5>
                <p className="card-text">
                  <label className="fw-bold rounded p-1 border-end border-bottom border-info border-2">Description</label> <br></br>
                  {c.description}
                </p>
              </div>
              <ul className="list-group list-group-flush"  key={Math.random()}>
                <li className="list-group-item" key={Math.random()}>
                  <label className="fw-bold rounded p-1 border-end border-bottom border-info border-2">Ship</label> <br></br> {c.ship}
                </li>
                <li className="list-group-item" key={Math.random()}>
                  <label className="fw-bold rounded p-1 border-end border-bottom border-info border-2">Skill</label> <br></br> {c.skill_level}
                </li>
              </ul>
              <div className="card-body">

                <a href="/creator">
                <button
                  id={c.id}
                  className="btn btn-danger"
                  onClick={props.removeItem}
                >
                  Remove
                </button>
                </a>
                
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
