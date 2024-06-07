import React from "react";
import './friend.css'

function Friend(props){
    return(
        <div className="friend">
            <img src={props.img} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;