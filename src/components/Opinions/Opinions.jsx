import React, { useState, useEffect } from 'react';
import '../../styles/Opinions.css';
import comillas from '../../assets/images/comillas.png';
import user from '../../assets/images/user.jpg';
import { CSSTransition } from 'react-transition-group';

const Opinions = () => {
  const opinionsData = [
    {
      id: 1,
      content: "¡Absolutamente impresionante! La artesanía en las uñas está más allá de la imaginación. Me sentí como una reina con mi nuevo juego de uñas. La atención al detalle es inigualable. ¡No puedo esperar para presumirlas!",
      author: "Isabella Smith",
    },

    {
      id: 2,
      content: "¡Transformación de uñas asombrosa! Las elecciones de color y los diseños son fuera de este mundo. Es como una obra de arte en mis dedos. Los cumplidos no han dejado de llegar. ¡Altamente recomendado!",
      author: "Sophie Anderson",
    },

    {
      id: 3,
      content: "¡Increíble experiencia con las uñas! La creatividad y habilidad mostradas al hacer mis uñas fueron excepcionales. Salí sintiéndome segura y fabulosa. La atmósfera en el salón es tan acogedora. ¡Definitivamente volveré!",
      author: "Michael Rodriguez",
    },

    {
      id: 4,
      content: "¡Increíble magia con las uñas! No sabía que mis uñas podían lucir tan bien. La precisión del técnico es inigualable. Todo el proceso fue relajante y los resultados hablan por sí mismos. ¡10/10!",
      author: "Emily Davis",
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
    }, 9000);

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