import React from 'react';
import { NavLink } from "react-router-dom";
import Logout from './Logout';

export const Navbar = () => {
    return (
      <div>
        <div className="nav">
          <NavLink to="/">HOME </NavLink>
          <NavLink to="/profile">Profile  </NavLink>   
          <NavLink to="/creator">Creator</NavLink>
        <Logout/>
        </div> 
      </div>
    );
  };
export default Navbar;