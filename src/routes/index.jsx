import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Services from "../views/Services";
import NavBar from "../components/NavBar/NavBar";
import Contact from "../views/Contact";
import Footer from "../components/Footer/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services/>}/>
        <Route path="/servicio2" element={<Services/>}/>
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;