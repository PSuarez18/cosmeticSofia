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
    </nav>
  )
}


export default NavBar