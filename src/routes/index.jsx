import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<NavBar/>}/>
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
