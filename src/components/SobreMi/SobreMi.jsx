import React from "react";
import "./Sobremi.css";
import "../ProfileCards/ProfileCard.css";

const SobreMi = () => {
  return (
    <div id="inicio" className="profile-card-container-sobremi">
      <div className="profile-card-sobremi">

        <div className="profile-content-sobremi">

          <div className="summarySobreMi">

            <h1 className='tituloSobremi'>Sobre Mí</h1>
            <div className='contentSobreMi'>
              <h5 className='tituloSobreMiResumen'>Biografía</h5>
              <p>
                Soy Leonel Piter, un profesional de 40 años, con experiencia en la industria y especializado en calidad y productividad. He trabajado por 20 años en diferentes roles, incluyendo 15 años en el departamento de calidad, donde he desarrollado habilidades en análisis de laboratorio y control de procesos.
              </p>

              <h5 className='tituloSobreMiResumen'>Habilidades</h5>
              <p className="habilidades">
              &#9827; Habilidades en análisis de laboratorio y control de procesos.<br/>
              &#9827; Adaptar aplicaciones web para mejorar eficiencia y dinamismo.<br/>
              &#9827; Resolutivo, autodidacta, adaptable, abierto al aprendizaje constante..<br/>
              &#9827; Experiencia industrial: 20 años comprendiendo procesos y necesidades.<br/>
              &#9827; Apasionado por innovación y mejorar procesos constantemente.<br/>
              </p>

              <h5 id="sobre-mi" className='tituloSobreMiResumen'>Mis valores</h5>
<p className="misValores">
&#9827;   Voluntad y esfuerzo.
<br/>
  &#9827; Autodidacta.
  <br/>
  &#9827; Aprendizaje continuo
<br/>
  &#9827; Detallista y preciso.
<br/>
  &#9827;Apasionado por innovar y mejorar procesos.
<br/>
</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
