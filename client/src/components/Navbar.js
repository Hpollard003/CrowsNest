import React from "react";
import Logout from "./Logout";
import crow from '../containers/crowsnestlogo.png'

export const Navbar = () => {
  return (
    <div className="nav m-4 hstack gap-5 ">
      <a href="/" className="text-decoration-none fw-bold text-info"><img src={crow} className="rounded-pill border border-dark border-2" style={{ width: "6rem" }} alt="logo" href="/" /> BETA</a>
      
      
      <ul className=" nav d-inline-flex position-absolute top-0 end-0 m-3">
        <li className="nav-item">
          <a className="nav-link text-dark" aria-current="page" href="/">
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark fw-bold border-start border-end border-info border-2 mx-2 rounded" href="/profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold border-start border-end border-info border-2 rounded" href="/creator">
            Create Character
          </a>
        </li>
        <Logout />
      </ul>
    </div>
  );
};
export default Navbar;
