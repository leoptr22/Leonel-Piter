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
              &#9827; Especialista en Calidad y Productividad: Con 15 años de experiencia en el departamento de calidad, he desarrollado habilidades en análisis de laboratorio y control de procesos. <br/>
              &#9827; Apasionado por la Tecnología: He aprendido a programar para adaptar aplicaciones web a mi entorno laboral y mejorar la eficiencia y dinamismo.<br/>
              &#9827; Resolutivo y Autodidacta: He desarrollado habilidades blandas como resolutivo y autodidacta para superar desafíos y aprender constantemente.<br/>
              &#9827; Predisposición para Aprender: Me siento cómodo aprendiendo nuevas tecnologías y habilidades para mantenerme actualizado en el mercado laboral. <br/>
              &#9827; Experiencia en la Industria: He trabajado por 20 años en la industria, lo que me ha dado una comprensión profunda de los procesos y necesidades del sector.<br/>
              &#9827; Desarrollador de Soluciones Personalizadas: He creado soluciones personalizadas para mejorar la eficiencia y dinamismo en mi entorno laboral.<br/>
              &#9827; Apasionado por la Innovación: Me siento apasionado por la innovación y siempre estoy buscando formas de mejorar procesos y soluciones.<br/>
              </p>

              <h5 id="sobre-mi" className='tituloSobreMiResumen'>Mis valores</h5>
<p className="misValores">
&#9827;; Resolutividad: Me esfuerzo por encontrar soluciones efectivas a los problemas que enfrento.
<br/>
  &#9827;; Autodidactismo: Me gusta aprender nuevas tecnologías y habilidades para mantenerme actualizado.
  <br/>
  &#9827;; Predisposición para Aprender: Me siento cómodo aprendiendo nuevas cosas y me esfuerzo por mejorar constantemente.<br/>
  &#9827;; Detallismo: Me aseguro de que todo sea precisamente como lo quiero, ya sea en mi trabajo o en mi vida personal.<br/>
  &#9827;; Innovación: Me siento apasionado por la innovación y siempre estoy buscando formas de mejorar procesos y soluciones.<br/>
</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
