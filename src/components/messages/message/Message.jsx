import React from "react";
import './message.css'

function Message(props) {
    return (
        <div className="message">
            <p className="name">{props.name}</p>
            <p className="text">{props.text}</p>
        </div>
    )
} 

export default Message;