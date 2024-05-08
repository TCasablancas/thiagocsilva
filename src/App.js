import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/top_navigation_bar';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/navigation/Footer';

function App() {
  return (
    <Router>
      <NavBar />
        <main className='main-content'>
          <Routes path="/" element={ <Home />}>
            <Route index element={ <Home /> } />
            <Route path='projects' element={ <Projects /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;