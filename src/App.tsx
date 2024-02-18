import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from './components/frontpage/frontpage';
import Project from './components/project/project';
import GitHubActivity from './components/githubactivity/githubactivity';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/githubactivity" element={<GitHubActivity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
