import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'
import nailsLogo from "../../assets/images/nailsLogo.png"
import logoMarket from "../../assets/images/logoMarket.png"
import menuToggle from "../../assets/images/menu.png"
import MenuDrop from '../MenuNavBarDrop/MenuNavBarDrop';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='container-logoNails'>
        <a href="/"><img src={nailsLogo} alt="nailsLogo" /></a>
      </div>

      <MenuDrop menuOpen={menuOpen} />
      <ul className="navbar-list">
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>Inicio</Link>
        </li>

        <li className='navbar-item'>
          <Link to="/servicios" className='navbar-link'><span>Servicios</span></Link>
        </li>
        <li className='navbar-item'>
          <Link to="/cursos" className='navbar-link'><span>Cursos</span></Link>
        </li>
        <li className='navbar-item'>
          <Link to="/blog" className='navbar-link'><span>Blog</span></Link>
        </li>
        <li className='navbar-item'>
          <Link to="/contacto" className='navbar-link'><span>Contacto</span></Link>
        </li>
      </ul>
      <div className='container-logoMarket'>
        <a href="/"><img className="logoMarket" src={logoMarket} alt="" /></a>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <img src={menuToggle} alt="menuToggle" />
      </div>
    </nav>
  )
}


export default NavBar