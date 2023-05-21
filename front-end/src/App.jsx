import { Fragment, useState } from 'react';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm1';
import { Container } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul className='App-header'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<PatientForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
