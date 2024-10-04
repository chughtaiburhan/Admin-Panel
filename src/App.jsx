import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Maindash from './components/MainDash/Maindash';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <Maindash/>
      <RightSide/>
    </div>
  )
}

export default App
