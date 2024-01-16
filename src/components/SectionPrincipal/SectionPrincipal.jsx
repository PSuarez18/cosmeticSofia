import React from 'react';
import '../../styles/SectionPrincipal.css';
import imagen1 from '../../assets/images/carrusel.png'

const SectionPrincipal = () => {
  return (
    <div className='section'>
        <div className='informacion'>
            <h1>Las mejores uñas para los mejores momentos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, tempore quas delectus pariatur eveniet totam ex aut unde corrupti!</p>
            <div className='botones'>
                <a href="" className='boton'>Reservar ahora!</a> <a href="" className='boton'>Ver todos los servicios</a>
            </div>
        </div>
        <div className='carrusel'>
            <img src={imagen1} alt="" />
        </div>
    </div>
  )
}

export default SectionPrincipal