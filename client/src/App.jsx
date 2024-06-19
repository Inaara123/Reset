import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Schedule from './components/Schedule';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Schedule" element={<Schedule/>}/>
      </Routes>
    </Router>
    
   
    
  )
}

export default App