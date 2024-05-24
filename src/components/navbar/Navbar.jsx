import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
      <div className="navbar">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/">Users</NavLink>
        
      </div>
    )
  }

export default Navbar;