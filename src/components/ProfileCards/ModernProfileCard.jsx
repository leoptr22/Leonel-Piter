import React, { useState, useEffect } from 'react';
import './ModernProfileCard.css';
import MyName from '../MyName/MyName';
import modernImage from '../../assets/2.png';
import cvIcon from '../../assets/iconocv.png';
import { useInView } from 'react-intersection-observer';
import GlitchText from "../MyName/Nombre"; 

const ModernProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1Ojxuz1r1lkL9TLoECfQYBJYv7Af_h3Jq/view?usp=sharing';
  };

  return (
    <div className={`modern-profile-card-container ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="modern-profile-card">
        <div className="profile-description">
          <MyName />
          <GlitchText className="glitch-text" speed={1} enableShadows={true} enableOnHover={true}>
            LEONEL PITER </GlitchText>
          <p>
Con más de 15 años en control de calidad en manufactura, me especializo en asegurar la excelencia en productos y procesos. Ahora, en mi camino hacia el desarrollo web en la UNER, profundizo en tecnologías como JavaScript, HTML, CSS, React, Python y Scala .... para impulsar la transformación digital de las empresas, mejorando tanto la calidad como la eficiencia.          </p>
          <button className="download-cv" onClick={handleDownload}>
            <img src={cvIcon} alt="CV" className="cv-icon" /> Descargar CV
          </button>
        </div>
        <div className="profile-image">
          <img src={modernImage} className='image' />
        </div>
      </div>
    </div>
  );
};

export default ModernProfileCard;