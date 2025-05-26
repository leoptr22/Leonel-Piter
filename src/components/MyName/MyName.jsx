import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';
import gsap from 'gsap';
import './MyName.css';

const MyName = () => {
  const textoRef = useRef(null);
  const nombreRef = useRef(null);

  useEffect(() => {
    // Configurar TypeIt
    const instance = new TypeIt(textoRef.current, {
      speed: 150,
      loop: true
    })
      .type("Calidad")
      .pause(1000)
      .delete(7)
      .type("Iso 9001")
      .pause(1000)
      .delete(8)
      .type("Productividad")
      .pause(1000)
      .delete(13)
      .type("Javascript")
      .pause(1000)
      .delete(10)
      .type("React")
      .pause(1000)
      .go();

    // Animaciones de GSAP
    gsap.fromTo(
      nombreRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.2 }
    );

    gsap.fromTo(
      textoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 1.5 }
    );

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="myname-container">
      <h1 ref={nombreRef} className="header-text">
        <span id='inicio' className="hola">¡Hola! Soy </span>
      </h1>
      <p ref={textoRef} className="typeit-text"></p>
    </div>
  );
};

export default MyName;
