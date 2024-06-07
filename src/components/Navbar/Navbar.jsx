import React from "react";
import "./Navbar.css"; // Añade estilos personalizados aquí si es necesario

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#inicio" onClick={(e) => smoothScroll(e, 'inicio')}>Inicio</a></li>
        <li><a href="#sobre-mi" onClick={(e) => smoothScroll(e, 'sobre-mi')}>Sobre Mí</a></li>
        <li><a href="#propuestas" onClick={(e) => smoothScroll(e, 'propuestas')}>Propuestas</a></li>
        <li><a href="#contacto" onClick={(e) => smoothScroll(e, 'contacto')}>Contacto</a></li>
      </ul>
    </nav>
  );
}

function smoothScroll(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

export default Navbar;
