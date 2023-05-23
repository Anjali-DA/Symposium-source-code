import { Fragment, useState } from 'react';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Features from './pages/Features';
import About from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/report' element={<PatientForm />}></Route>
        <Route exact path='/features' element={<Features />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
