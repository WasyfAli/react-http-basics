import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserGet from './component/UserGet';
import UserPost from './component/UserPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserPost />
        <img src={logo} className="App-logo" alt="logo" />
        <UserGet />
      </header>
    </div>
  );
}

export default App;
