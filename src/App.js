import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import HeroSection from './components/HeroSection';
import Home from './Pages/Home';


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact  element={<Home/>}/>
      </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
