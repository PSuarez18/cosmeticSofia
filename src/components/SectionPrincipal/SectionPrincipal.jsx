import React from 'react';
import '../../styles/SectionPrincipal.css';
import imagen1 from '../../assets/images/imagen1.jpg';
import fondoDeUñas from '../../assets/images/fondoDeUñas.jpg';

const SectionPrincipal = () => {
  return (
    <div className='section'>
        <div className='informacion'>
          <div className='bloqueInfo'>
            <h1>Las mejores uñas para los mejores momentos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, tempore quas delectus pariatur eveniet totam ex aut unde corrupti!</p>
            <div className='botones'>
                <a href="" className='boton'><span className='span'>Reservar ahora</span></a> <a href="" className='otro-boton'><span className='span'>Ver todos los servicios</span></a>
            </div>

          </div>
        </div>
        <div class="carrusel-container">
          <div class="carrusel">
            <div className='columnauno'>1</div>
              <img src={imagen1} class="foto" alt="" />
            <div className='columnados'>3</div>
          </div>
          <div class="indicadores">
              <div class="indicador"></div>
              <div class="indicador"></div>
              <div class="indicador"></div>
          </div>
        </div>
    </div>
  )
}

export default SectionPrincipal