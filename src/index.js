import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postList = [
  {message:'Hello world', id:1},
  {message:'Я Илон Маск!', id:2},
  {message:'Полетели на марс!', id:3},
  {message:'Дорбое утро', id:4},
]

let messageList = [
  {name:'Вася', text:'Привет', id:1},
  {name:'Андрей', text:'Здрасьте', id:2},
  {name:'Леха', text:'Добрый день', id:3},
  {name:'Леха', text:'Добрый день', id:3},
  {name:'Леха', text:'Добрый день', id:3},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postList={postList} messageList={messageList}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
