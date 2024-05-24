import React from "react";
import './messages.css'
import Message from "./message/Message";

function Messages() {
    return (
        <div className="messages">
            <Message name='Вася' text='Привет!' />
            <Message name='Андрей' text='Здрасьте!' />
            <Message name='Лёха' text='чёкаво!' />
            <input type="text" />
            <button>send</button>
        </div>
    )
}

export default Messages;

// ДЗ добавить больше сообщеyий в message (может добавить props для имени и сообщения) и починить grid