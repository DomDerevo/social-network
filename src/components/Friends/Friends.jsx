import React from "react";
import './friends.css'
import Friend from "./friend/Friend";

function Friends(props) {
    return (
        <div className="friends">
            <h2>Friends</h2>
            <div className="friends__list">
                {props.friends.map(e => <Friend name={e.name} img={e.img} id={e.id} />)}
            </div>
        </div>
    )
}

export default Friends;