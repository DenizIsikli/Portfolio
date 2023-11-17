import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from './components/frontpage/frontpage';
import Project from './components/project/project';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="/project" element={<Project />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
