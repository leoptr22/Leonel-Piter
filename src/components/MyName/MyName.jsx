import React, { useEffect } from 'react';
import TypeIt from 'typeit';
import './MyName.css'; // Importa el archivo CSS

const MyName = () => { 
  useEffect(() => {
    const instance = new TypeIt("#textoTypeIt", {
      strings:"",
      speed: 200,
      loop: true
    }).go()

    instance
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

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="header-text"><span className='hola'>Hola¡ </span>, Soy Leonel ...{""}</h1>
      
      <p id="textoTypeIt" className="typeit-text"></p>
    
    
    </div>
  );
};

export default MyName;
