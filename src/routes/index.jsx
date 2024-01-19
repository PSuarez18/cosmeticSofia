import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Services from "../views/Services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services/>}/>
        <Route path="/servicio2" element={<Services/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;