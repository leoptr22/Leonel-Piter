import React from 'react';
import './Contacto.css'; // Asegúrate de que el archivo CSS esté en la ubicación correcta

import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import mail from '../../assets/mail.png';

import profileImage from '../../assets/robotcontacto.png';

const Contacto = () => {
  return (
    <div id='contacto' className="profile-card-contenedor">
      <div className="profile-card">
        <div className="profile-content contacto">
          <div className="links">
            <div className="link-item">
              <a href="https://www.linkedin.com/in/leonelpiter/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />  
              </a>
              <h2>Leonel Piter</h2>
            </div>
            <div className="link-item">
              <a href="https://github.com/leoptr22" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="social-icon" />
              </a>
              <h2>User: leoptr22</h2>
            </div>
            <div id="contacto" className="link-item">
              <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Whatsapp" className="social-icon" />
              </a>
              <h2>3446-597723</h2>
            </div>
            <div className="link-item">
              <a href="mailto:leonelpiter@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Mail" className="social-icon" />
              </a>
              <h2>leonelpiter@gmail.com</h2>
            </div>
          </div>
          <div className="foto">
            <img src={profileImage} alt="Profile" className="profile-imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

