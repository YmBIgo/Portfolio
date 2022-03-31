import React from 'react';
import {Routes, Route} from "react-router-dom"

import TopPage from "./components/TopPage"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
