import React, { useState } from 'react';
import '../../styles/SectionPrincipal.css';
import imagen1 from '../../assets/images/imagen1.jpg';
import imagen2 from '../../assets/images/sofiaZilliNails.jpg';
import imagen3 from '../../assets/images/carrusel.jpg';
import imagen4 from '../../assets/images/carrusel2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';




const SectionPrincipal = () => {

  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen1,
    imagen3,
    // Agrega más nombres de imágenes según sea necesario
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='section2'>
        <div className='informacion'>
          <div className='bloqueInfo'>
            <h1>Las Mejores Uñas Para Los Mejores Momentos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, tempore quas delectus pariatur eveniet totam ex aut unde corrupti!</p>
            <div className='botones'>
                <a href="" className='primary-button'>Reservar ahora</a> 
                <a href="" className='primary-button-border'>Ver todos los servicios</a>
            </div>

        </div>
        <div className="carrusel-container">
          <div className="carrusel">
            
              <button className='columnaUno' onClick={handlePrev} aria-label="Anterior" ><FontAwesomeIcon icon={faCircleChevronLeft} className='icon' /></button>
              
              <img src={images[currentImage]} className="foto" alt={`imagen ${currentImage + 1}`} />
            
              <button className='columnados' onClick={handleNext} aria-label="Siguiente"> <FontAwesomeIcon icon={faCircleChevronRight} className='icon' /></button>
              <div className="indicadores"> 
                  {images.map((_, index) => (
                    <div key={index} className={`indicador ${index === currentImage ? 'activo' : ''}`}></div>
                  ))}
              </div>
          </div>
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