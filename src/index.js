import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Data/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) => {
    root.render(
      <React.StrictMode>
        <App state={state}
        dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    );
  }
  
  export default rerenderTree



reportWebVitals();



store.subscribe(rerenderTree)
rerenderTree(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
