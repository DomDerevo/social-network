// ДЗ https://ru.reactjs.org/docs/components-and-props.html

// В компоненте posts вынести данные в сторону в виде массива объектов. С помощью map() отрисовать все посты сразу (как делали в Vtssages  спомощью списка и map)


import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter >
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/' element={<Profile postList={props.state.profilePage.postList} />}/>
            <Route path='/profile' element={<Profile  postList={props.state.profilePage.postList}/>} />
            <Route path='/messages' element={<Messages messageList={props.state.dialoguePage.messageList}/>} />
          </Routes>
        </div>
      </BrowserRouter >
    </div>
  );
}

export default App;





