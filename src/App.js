// ДЗ https://ru.reactjs.org/docs/components-and-props.html


import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper-content">
        <Profile />
        <Messages />
      </div>
    </div>
  );
}

export default App;





