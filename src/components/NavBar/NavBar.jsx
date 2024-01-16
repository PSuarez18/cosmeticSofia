import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>Inicio</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/servicios" className='navbar-link'>Servicios</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/cursos" className='navbar-link'>Cursos</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/blog" className='navbar-link'>Blog</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/contacto" className='navbar-link'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar