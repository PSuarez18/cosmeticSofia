// MenuDrop.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MenuNavBarDrop.css';

const MenuDrop = ({ menuOpen }) => {
    return (
        <div className='menu-main-drop'>
            <div className={`menu-drop-container ${menuOpen ? 'show' : ''}`}>
                <ul className={`menu-drop-list ${menuOpen ? 'show' : ''}`}>
                    <li>
                        <Link to="/servicio1">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/servicio2">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/servicio2">Opiniones</Link>
                    </li>
                    <li>
                        <Link to="/servicio2">Redes Sociales</Link>
                    </li>
                    <li>
                        <Link to="/servicio2">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/servicio2">Pagar Compra</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default MenuDrop;
