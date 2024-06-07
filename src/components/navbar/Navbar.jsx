import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

function Navbar(props){
    return(
      <div className="navbar">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/">Users</NavLink>
        <Friends friends={props.friends}/>
      </div>
    )
  }

export default Navbar;