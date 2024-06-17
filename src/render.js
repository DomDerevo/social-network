import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, addMessage, onPostChange ,onMessageChange} from './Data/state'


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) => {
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange} onMessageChange={onMessageChange} />
      </React.StrictMode>
    );
  }
  
  export default rerenderTree



reportWebVitals();
