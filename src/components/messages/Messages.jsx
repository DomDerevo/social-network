import React from "react";
import './messages.css'
import Message from "./message/Message";
import { addMessageAC, onMessageChangeAC } from "../../Data/state";

let messageText = React.createRef()

function Messages(props) {
    console.log(props);
    let addMessage = ()=>{
        // props.addMessage(messageText.current.value)
        props.dispatch(addMessageAC())
    }
    let onMessageChange = ()=>{
        // props.onMessageChange(messageText.current.value)
        props.dispatch(onMessageChangeAC(messageText.current.value))
    }
    return (
        <div className="messages">
           {props.messageList.map(e => <Message name={e.name} text={e.text} id={e.id} />)}
            
            <input type="text" ref={messageText} value={props.newMessageText} onChange={onMessageChange} />
            
            <button onClick={addMessage}>send</button>
        </div>
    )
}

export default Messages;

// ДЗ добавить больше сообщеyий в message (может добавить props для имени и сообщения) и починить grid