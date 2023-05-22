import { Fragment, useState } from 'react';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/report' element={<PatientForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
