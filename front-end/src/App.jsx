import { Fragment, useState } from 'react';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Features from './pages/Features';
import About from './pages/AboutUs';
import Error from './pages/Error';
import Pform from './pages/Pform';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route exact path='/about' element={<About />} />
        {/* <Route exact path='/report' element={<PatientForm />} /> */}
        <Route exact path='/report' element={<Pform />} />

        <Route exact path='/features' element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
