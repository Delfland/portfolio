import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from '../components/Contact';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

const Portfolio = () => {

    return (
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/portfolio" element={ <Home/>} />
        <Route path="/" element={ <Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        </Router>
      );
}

export default Portfolio;