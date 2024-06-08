import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import MyName from '../MyName/MyName';
import profileImage from '../../assets/profile1.png';
import cvIcon from '../../assets/iconocv.png';
import { useInView } from 'react-intersection-observer';

const ProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1Ojxuz1r1lkL9TLoECfQYBJYv7Af_h3Jq/view?usp=sharing", "_blank");
  };

  return (
    <div id="inicio" className={`profile-card-container ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-image">
            {isVisible && <img src={profileImage} alt="Profile" />}
          </div>
          <div className="summary">
            <MyName />
            <p>
              Profesional con 15 años de experiencia en control de calidad en manufactura, garantizando productos de alta calidad a lo largo del proceso de producción. Actualmente, estudio programación y desarrollo web, adquiriendo competencias en JavaScript, HTML, CSS y React. Mi meta es fusionar mi experiencia en calidad con habilidades tecnológicas para mejorar la eficiencia y calidad en las empresas.
            </p>
            <div className="download-cv" onClick={handleDownload}>
              <img src={cvIcon} alt="CV" className="cv-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
