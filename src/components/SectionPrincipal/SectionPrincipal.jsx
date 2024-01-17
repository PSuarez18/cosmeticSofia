import React from 'react';
import '../../styles/SectionPrincipal.css';
import imagen1 from '../../assets/images/imagen1.jpg';
import fondoDeUñas from '../../assets/images/fondoDeUñas.jpg';

const SectionPrincipal = () => {
  return (
    <div className='section2'>
      <div className='informacion'>
        <div className='bloqueInfo'>
          <h1>Las mejores uñas para los mejores momentos</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, tempore quas delectus pariatur eveniet totam ex aut unde corrupti!</p>
          <div className='botones'>
            <a href="" className='primary-button'>Reservar ahora</a>
            <a href="" className='primary-button-border'>Ver todos los servicios</a>
          </div>

        </div>
      </div>
      <div className="carrusel-container">
        <div className="carrusel">
          <div className='columnauno'>1</div>
          <img src={imagen1} className="foto" alt="" />
          <div className='columnados'>3</div>
        </div>
        <div className="indicadores">
          <div className="indicador"></div>
          <div className="indicador"></div>
          <div className="indicador"></div>
        </div>
      </div>
    </div>
  )
}

export default SectionPrincipal