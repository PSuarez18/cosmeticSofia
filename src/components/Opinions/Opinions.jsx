import React, { useState, useEffect } from 'react';
import '../../styles/Opinions.css';
import comillas from '../../assets/images/comillas.png';
import user from '../../assets/images/user.jpg';
import { CSSTransition } from 'react-transition-group';

const Opinions = () => {
    const opinionsData = [
        {
          id: 1,
          content: "First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable.",
          author: "Dardo fuseneco",
        },

        {
            id: 2,
            content: "First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable.",
            author: "Jorge Damian",
          },

          {
            id: 3,
            content: "First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable.",
            author: "Alan Otero",
          },

          {
            id: 4,
            content: "First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable. First time trying it out, I loved the cleanliness. Great customer service and affordable.",
            author: "Jose Dominguez",
          },
        
      ];

      const [currentSlide, setCurrentSlide] = useState(0);
      const [activateTransition, setActivateTransition] = useState(true);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setActivateTransition(false);
    
          setTimeout(() => {
            nextSlide();
            setActivateTransition(true);
          }, 1000); // Ajusta el tiempo según sea necesario
        }, 4000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentSlide]);
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % opinionsData.length);
      };


  return (
    <section className='sectionOpinion'> 
    <div className='contenedor-opiniones'>
      <div className='contenedorFirst'>
        <div className='contenedorTitulo'>  
          <h2 className='tituloOpinion'>
            Escucha Lo Que Nuestras Clientes Tienen Que Decir
          </h2>
          <div className='botonOpinion'>
            <button className='primary-button'>Contactanos</button>
          </div> 
        </div>   
      </div>
      <div className='contenedorSecond'>
          <div className='contenedorSlide'>
            <CSSTransition
              in={activateTransition}
              timeout={1000}
              classNames="arraySlide"
              unmountOnExit
            >
              <div className='arraySlide'>
                <div key={opinionsData[currentSlide].id} className={`opinion opinion${currentSlide + 1}`}>
                  <img className='comillas' src={comillas} alt="" />
                  <p>{opinionsData[currentSlide].content}</p>
                  <div className='contenedorImgUser'>
                    <img className='imgUser' src={user} alt="" />
                    <p className='nameUser'>{opinionsData[currentSlide].author}</p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opinions