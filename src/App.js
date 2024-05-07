import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/top_navigation_bar';
import Home from './views/home/Home';
import Projects from './views/projects/Projects';

function App() {
  return (
    <Router>
      <NavBar>
        <main className='main-content'>
          <Routes>
            <Route path='/home' element={ <Home /> } />
            <Route path='/projects' element={ <Projects /> } />
          </Routes>
        </main>
      </NavBar>
    </Router>
  );
}

export default App;