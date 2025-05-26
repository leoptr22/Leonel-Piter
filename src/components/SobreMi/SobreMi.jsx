import React, { useState, useEffect } from "react";
import "./Sobremi.css";
import { useInView } from "react-intersection-observer";
import CircularText from "../ListaAnimada/CircularText"; // Asegúrate de que la ruta sea correcta
import { motion } from "framer-motion"; // Asegúrate de tener framer-motion instalado

const SobreMi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    
    <div
      id="inicio"
      className={`profile-card-container-sobremi ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      
      <div id="sobre-mi" className="profile-card-sobremi">

       <CircularText
        text="LEONEL*PITER*DESARROLLO WEB*"
        onHover="speedUp"
        spinDuration={20}
        className="circular-text"
      />
        
        <div className="profile-content-sobremi">
          <div className={`summarySobreMi ${isVisible ? "slide-in-left" : ""}`}>
            <h1 className="tituloSobremi">Sobre Mí</h1>
            <div className="contentSobreMi">
              <h5 className="tituloSobreMiResumen">Biografía</h5>
              <p>
                Soy Leonel Piter, profesional con 20 años de experiencia en la industria, especializado en calidad y productividad. Actualmente, estudio desarrollo web en la UNER, ampliando mis habilidades en tecnologías como JavaScript, React, HTML y CSS. Mi objetivo es fusionar mi experiencia en calidad con conocimientos tecnológicos para optimizar procesos y mejorar resultados.
              </p>

              <div className="card-habilidades-valores">
                <div className="card-section">
                  <h5 className="tituloSobreMiResumen">Habilidades</h5>
                  <ul className="habilidades">
                    <li>&#9827; Análisis de laboratorio y control de procesos</li>
                    <li>&#9827; Adaptación de aplicaciones web para mejorar eficiencia</li>
                    <li>&#9827; Resolutivo, autodidacta y adaptable</li>
                    <li>&#9827; Amplia experiencia en procesos industriales</li>
                    <li>&#9827; Innovación y mejora continua en procesos</li>
                  </ul>
                </div>
                <div className="card-section">
                  <h5 className="tituloSobreMiResumen">Mis Valores</h5>
                  <ul className="misValores">
                    <li>&#9827; Voluntad y esfuerzo</li>
                    <li>&#9827; Aprendizaje continuo</li>
                    <li>&#9827; Detallismo y precisión</li>
                    <li>&#9827; Pasión por innovar y mejorar procesos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
