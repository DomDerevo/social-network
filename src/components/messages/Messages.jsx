import React from "react";
import './messages.css'
import Message from "./message/Message";




function Messages(props) {
    return (
        <div className="messages">
           {props.messageList.map(e => <Message name={e.name} text={e.text} id={e.id} />)}
            
            <input type="text" />
            <button>send</button>
        </div>
    )
}

export default Messages;

// ДЗ добавить больше сообщеyий в message (может добавить props для имени и сообщения) и починить grid