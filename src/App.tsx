import { } from 'react'
import Frontpage from './components/frontpage/frontpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Frontpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
