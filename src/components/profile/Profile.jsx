import React from "react";
import './profile.css';
import ava from '../../img/ilonBig.jpg';
import ava_min from '../../img/ilonSmall.jpg'

function Profile(){
    return(
      <div className="profile">
        <div className="me">
            <img src={ava} alt="ElonMask" />
            <p>Elon Mask</p>
        </div>
        <div className="posts">
            <input type="text" placeholder="Enter the post" />
            <button>
                Add post
            </button>
            <div className="post">
                <img src={ava_min} alt="" />
                <span>Elon Mask</span>
                <p>Lorem, ipsum</p>
            </div>
        </div>
      </div>
    )
  }

export default Profile;