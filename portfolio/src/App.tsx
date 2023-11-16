import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Frontpage from './components/frontpage/frontpage';
import Project from './components/project/project';
import CV from './components/cv/cv';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
