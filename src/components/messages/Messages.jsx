import React from "react";
import './messages.css'
import Message from "./message/Message";

let messageList = [
    {name:'Вася', text:'Привет', id:1},
    {name:'Андрей', text:'Здрасьте', id:2},
    {name:'Леха', text:'Добрый день', id:3},
    {name:'Леха', text:'Добрый день', id:3},
    {name:'Леха', text:'Добрый день', id:3},
]

function Messages() {
    return (
        <div className="messages">
           {messageList.map(e => <Message name={e.name} text={e.text} id={e.id} />)}
            
            <input type="text" />
            <button>send</button>
        </div>
    )
}

export default Messages;

// ДЗ добавить больше сообщеyий в message (может добавить props для имени и сообщения) и починить grid