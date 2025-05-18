import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Propuesta.css';

import Modal from './Modal';
import { useInView } from 'react-intersection-observer';

import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import propuesta2 from '../../assets/propuesta2.png';
import film from '../../assets/film.png';
import film2 from '../../assets/film2.png';



const PropuestaCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [descripcionModal, setDescripcionModal] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const propuestas = [
    {
      fotos: [foto1, foto2, foto3],
      descripcion: "Aplicación web utilizando Firebase como plataforma backend para el almacenamiento de datos y la gestión de usuarios. La aplicación permite cargar certificados de análisis de manera eficiente y rápida, proporcionando una interfaz intuitiva y amigable para los usuarios. Además, se implementó una función de búsqueda que permite encontrar certificados utilizando un patrón de coincidencia, lo que facilita la localización de documentos específicos de manera ágil."
    },
    {
      fotos: [propuesta2,propuesta2,propuesta2 ],
      descripcion: "Control de procesos de produccion, con segimiento online / on demand, realizado con React y Google Sheet."
    },

    {
      fotos: [film,film2,film ],
      descripcion: "buscador de peliculas por titulo, valoracion y demas informacion a traves de IMDB"
    },
  ];

  const handleSlideClick = (descripcion) => {
    setDescripcionModal(descripcion);
    setModalOpen(true);
  };

  return (
    <div id="propuestas" className={`propuesta-card-contenedor ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className={`propuesta-card ${isVisible ? "visible" : ""}`}>
        
        <div  className='tituloPropuesta'><h1> Propuestas realizadas</h1></div>
        {propuestas.map((grupo, index) => (
          <Slider key={index} {...settings}>
            {grupo.fotos.map((foto, i) => (
              <div key={i} className="foto-container" onClick={() => handleSlideClick(grupo.descripcion)} title="Ver descripción">
                <img src={foto} alt={`Foto ${i + 1}`} className="foto-propuesta" />
              </div>
            ))}
          </Slider>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>{descripcionModal}</p>
      </Modal>
    </div>
  );
};

export default PropuestaCard;
