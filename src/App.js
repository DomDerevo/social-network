// ДЗ https://ru.reactjs.org/docs/components-and-props.html

// https://docs.google.com/document/d/e/2PACX-1vT3BLTQ0vVYCBbaHQnGHGDPJdRv0l0NoWTtC_p5hJIr-vMwRUKpl449wN4Z_xBk86dX_2aB9qqtCFqG/pub

// https://ru.wikipedia.org/wiki/Flux-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0



import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter >
        <Header />
        <Navbar friends={props.state.Navbar.friends}/>
        <div className="wrapper-content">
          <Routes>
            <Route path='/' element={<Profile postList={props.state.profilePage.postList} addPost = {props.addPost} />}/>
            <Route path='/profile' element={<Profile  postList={props.state.profilePage.postList} addPost = {props.addPost} />} />
            <Route path='/messages' element={<Messages messageList={props.state.dialoguePage.messageList} addMessage={props.addMessage} />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div>
  );
}

export default App;





