import React from 'react';
import './App.css';
import Navbar from "./Components/Pages/Navbar";
import {Router} from "./Router/Routes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
