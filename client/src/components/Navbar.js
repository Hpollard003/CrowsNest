import React from "react";
import Logout from "./Logout";

export const Navbar = () => {
  return (
    <div className="position-relative">
    <div className="position-absolute top-0 end-0 d-inline-flex p-3 b rounded-pill hstack gap-5 ">
      
      <ul className=" nav ">
        <li className="nav-item">
          <a className="nav-link text-dark" aria-current="page" href="/">
            <h3 className="border border-info border-2 rounded-pill p-2" href="/" >theCrowsNest</h3>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark" href="/profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/creator">
            Create Character
          </a>
        </li>
        <Logout />
      </ul>
    </div>
    </div>
  );
};
export default Navbar;
