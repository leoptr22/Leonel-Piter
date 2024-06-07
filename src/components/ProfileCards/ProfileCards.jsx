import React from 'react';
import './ProfileCard.css';
import MyName from '../MyName/MyName';
import profileImage from '../../assets/profile1.png';
import cvIcon from '../../assets/iconocv.png';

const ProfileCard = () => {
  return (
    <div id="inicio" className="profile-card-container">
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="summary">
            <MyName />
            <h2 className='tituloResumen'>Resumiendo . . .</h2>
            
            <p>
              Profesional con 15 años de experiencia en control de calidad en manufactura, garantizando productos de alta calidad a lo largo del proceso de producción. Actualmente, estudio programación y desarrollo web, adquiriendo competencias en JavaScript, HTML, CSS y React. Mi meta es fusionar mi experiencia en calidad con habilidades tecnológicas para mejorar la eficiencia y calidad en las empresas.
            </p>
            <div className="download-cv">
              <a href="https://drive.google.com/file/d/1Ojxuz1r1lkL9TLoECfQYBJYv7Af_h3Jq/view?usp=sharing" className='descargarcv' download>
                <img src={cvIcon} alt="CV" className="cv-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
