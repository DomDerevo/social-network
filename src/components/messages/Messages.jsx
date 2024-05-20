import React from "react";
import './messages.css'
import Message from "./message/Message";

function Messages() {
    return (
        <div className="messages">
            <Message />
            <p></p>
            <input type="text" />
            <p></p>
            <button>send</button>
        </div>
    )
}

export default Messages;