import React from "react";
import './profile.css';
import ava from '../../img/ilonBig.jpg';
import Posts from "./posts/Posts";

function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="ElonMask" />
        <p>Elon Mask</p>
      </div>
      <Posts />
    </div>
  )
}

export default Profile;